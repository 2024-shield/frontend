import { useEffect, useRef } from 'react';
import styled from 'styled-components';

declare global {
  interface Window {
    initMap: () => void;
  }
}

const MapStyle = styled.div`
    width: 100%;
    height: 90vh;
`

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    // script.defer = true;
    document.body.appendChild(script);

    window.initMap = () => {
      new window.google.maps.Map(mapRef.current!, {
        center: { lat: 37.5665, lng: 126.9780 },
        zoom: 8,
      });
    };

    return () => {
      document.body.removeChild(script);
    };
}, []);

return(
    <>  
      <MapStyle>
          <div ref={mapRef} style={{ width: '100%', height: '90vh' }}/>
      </MapStyle>
    </>
    );
};

export default Map;