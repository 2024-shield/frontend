import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

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

  const [isOpen, setIsOpen] = useState(false);
  const [markerPosition, setMarkerPosition] = useState<google.maps.LatLng | null | undefined>(null);
  const [markerTitle, setMarkerTitle] = useState<string | null | undefined>(null);


  useEffect(() => {
    // 마커 클릭 이벤트를 감지합니다.
    const markerClickEvent = (event: Event) => {
      const customEvent = event as CustomEvent<string>;  // 이벤트를 CustomEvent로 타입 캐스팅합니다.
      if (customEvent.detail === 'marker1' || customEvent.detail === 'marker2') {
        setIsOpen(true);
      }
    };
    
    window.addEventListener('markerClick', markerClickEvent);

    return () => {
      window.removeEventListener('markerClick', markerClickEvent);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `http://maps.googleapis.com/maps/api/js?libraries=geometry&key=${import.meta.env.VITE_GOOGLE_MAP_API_KEY}&callback=initMap`;
    script.async = true;
    
    // 이미 동일한 스크립트가 로드되었는지 확인합니다.
    const existingScript = document.querySelector(`script[src="${script.src}"]`);
    if (!existingScript) {
      document.body.appendChild(script);
    }


      window.initMap = () => {
        const mapOptions = {
          center: { lat: 37.5494, lng: 126.9712 },
          zoom: 13,
        };

        mapObjRef.current = new window.google.maps.Map(mapRef.current!, mapOptions);
        // 첫 번째 위치에 마커를 추가합니다.
        const marker1 = new window.google.maps.Marker({
          position: { lat: 37.5455, lng: 126.9613 },
          title: "서울특별시 용산구 효창원로 177-18 <효창공원>",
        });

        // 두 번째 위치에 마커를 추가합니다.
        const marker2 = new window.google.maps.Marker({
          position: { lat: 37.5526, lng: 126.9864 },
          title: "서울특별시 중구 삼일대로 231 <남산공원>",
        });

        // 마커를 참조에 저장합니다.
        markersRef.current = [marker1, marker2];

        // 마커들을 지도에 추가합니다.
        markersRef.current.forEach(marker => marker.setMap(mapObjRef.current));

        marker1.addListener("click", () => {
          setMarkerPosition(marker1.getPosition());
          setMarkerTitle(marker1.getTitle());
          window.dispatchEvent(new CustomEvent('markerClick', { detail: 'marker1' }));
        });
        
        marker2.addListener("click", () => {
          setMarkerPosition(marker2.getPosition());
          setMarkerTitle(marker2.getTitle());
          window.dispatchEvent(new CustomEvent('markerClick', { detail: 'marker2' }));
        });

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

      {isOpen && (
        <Modal
          title={markerTitle}
          latlng={markerPosition}
          onClick={() => setIsOpen(false)} 
          />
      )}
    </>
  );
};

export default Map;
