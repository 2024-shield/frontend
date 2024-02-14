import { useEffect, useRef } from 'react';
import styled from 'styled-components';

declare global {
  interface Window {
    initMap: () => void;
  }
}

interface MapProps {
  lat: number;
  lng: number;
}

const MapStyle = styled.div`
    width: 100%;
    height: 50%;
`

const Map: React.FC<MapProps> = ({ lat, lng }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapObjRef = useRef<google.maps.Map | null>(null);
  //const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
  // const apiKey = VITE_GOOGLE_MAP_API_KEY

  useEffect(() => {
    if (!window.google) {
    const script = document.createElement('script');
    script.src = `http://maps.googleapis.com/maps/api/js?libraries=geometry&key=${import.meta.env.VITE_GOOGLE_MAP_API_KEY}&callback=initMap`;
    script.async = true;
    // script.defer = true;
    document.body.appendChild(script);

    window.initMap = () => {
      mapObjRef.current = new window.google.maps.Map(mapRef.current!, {
        //center: { lat: 37.5665, lng: 126.9780 },
        center: { lat: lat, lng: lng },
        zoom: 13,
      });
    };
    

    return () => {
      document.body.removeChild(script);
    };
  }
}, []);

useEffect(() => {
  if (mapObjRef.current) {
    mapObjRef.current.setCenter({ lat: lat, lng: lng });  // 위도, 경도가 변경될 때마다 지도의 중심을 변경합니다.
  }
}, [lat, lng]);

return(
    <>  
      <MapStyle>
          <div ref={mapRef} style={{ width: '100%', height: '75vh' }}/>
      </MapStyle>
    </>
    );
};

export default Map;