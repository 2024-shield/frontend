import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    initMap: () => void;
    google: any;
  }
}

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
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

  return <div ref={mapRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Map;