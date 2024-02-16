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
  const markersRef = useRef<google.maps.Marker[]>([]);

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `http://maps.googleapis.com/maps/api/js?libraries=geometry&key=${import.meta.env.VITE_GOOGLE_MAP_API_KEY}&callback=initMap`;
      script.async = true;
      document.body.appendChild(script);

      window.initMap = () => {
        const mapOptions = {
          center: { lat: 37.5494, lng: 126.9712 },
          zoom: 13,
        };

        mapObjRef.current = new window.google.maps.Map(mapRef.current!, mapOptions);

        // 첫 번째 위치에 마커를 추가합니다.
        const marker1 = new window.google.maps.Marker({
          position: { lat: 37.5455, lng: 126.9613 },
          title: "Cam 1",
        });

        // 두 번째 위치에 마커를 추가합니다.
        const marker2 = new window.google.maps.Marker({
          position: { lat: 37.5526, lng: 126.9864 },
          title: "Cam 2",
        });

        // 마커를 참조에 저장합니다.
        markersRef.current = [marker1, marker2];

        // 마커들을 지도에 추가합니다.
        markersRef.current.forEach(marker => marker.setMap(mapObjRef.current));

        marker1.addListener("click", () => {
          // 여기서 모달 창을 띄우는 코드를 작성하면 됩니다.
          alert("First location clicked");
        });
      
        marker2.addListener("click", () => {
          // 여기서 모달 창을 띄우는 코드를 작성하면 됩니다.
          alert("Second location clicked");
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
      
      // 마커 위치를 업데이트 합니다.
      markersRef.current[0].setPosition({ lat: 37.5455, lng: 126.9613 });
      markersRef.current[1].setPosition({ lat: 37.5526, lng: 126.9864 });
    }
  }, [lat, lng]);

  return (
    <>
      <MapStyle>
        <div ref={mapRef} style={{ width: '100%', height: '75vh' }}/>
      </MapStyle>
    </>
  );
};

export default Map;
