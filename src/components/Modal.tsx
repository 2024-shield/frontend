import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

interface ModalProps{
    title: string | null | undefined;
    latlng: google.maps.LatLng | null | undefined;
    onClick? : () => void;
}

const ModalWrap = styled.div`
  position: fixed;  // 위치를 fixed로 설정합니다.
  display: flex;  // display를 flex로 설정합니다.
  justify-content: center;  // 중앙 정렬을 위해 justify-content를 center로 설정합니다.
  align-items: center;  // 중앙 정렬을 위해 align-items를 center로 설정합니다.
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const ModalBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 20;
  bottom: 0;
  left: 0;
`;

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 30px 30px;
    border: 1px solid white;
    background-color: white;
    position: relative;
    z-index: 25;
    width: 360px;
    height: 40vh;
`;

const CloseButtonStyle = styled.div`
    display: flex;
    justify-content: flex-end;

    :hover{
        cursor: pointer;
    }
`

const InfoContainerStyle = styled.div`

`

const WeatherContainerStyle = styled.div`
    
`

const WeatherDivStyle = styled.div`
    padding: 15px 0px 0px 0px;
`


const Modal = ({ title, latlng, onClick }: ModalProps) =>{
    const [weatherData, setWeatherData] = useState<any>(null);
  
    useEffect(() => {
        if(latlng){
        //onecall?lat=${latlng.lat()}&lon=${latlng.lng()}&exclude=current&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng.lat()}&lon=${latlng.lng()}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)
                .then(response => response.json())
                .then(data => setWeatherData(data))
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));
        }
    }, [latlng]);

    const getWindDirection = (deg: number) => {
        const directions = ['북', '북동', '동', '남동', '남', '남서', '서', '북서'];
        const value = Math.floor((deg + 22.5) / 45);
        return directions[value % 8];
     };
    
  return (
    <ModalWrap>
        <ModalBackGround onClick={onClick} />
        <ModalContainer>
            <CloseButtonStyle>
                <FontAwesomeIcon icon={faClose} onClick={onClick}/>
            </CloseButtonStyle>

            <InfoContainerStyle>
                {title && (<h5>{title}</h5>)}
                {latlng && (
                    <h5>위도: {latlng.lat()}, 경도: {latlng.lng()}</h5>
                )}

                {weatherData && (
                    <WeatherContainerStyle>
                        <WeatherDivStyle>날씨 정보 : {weatherData.weather[0].main}</WeatherDivStyle>
                        <WeatherDivStyle>습도 : {weatherData.main.humidity} %</WeatherDivStyle>
                        <WeatherDivStyle>풍향 : {getWindDirection(weatherData.wind.deg)}</WeatherDivStyle>
                        <WeatherDivStyle>풍속 : {weatherData.wind.speed} m/s</WeatherDivStyle>
                    </WeatherContainerStyle>
                )}
            </InfoContainerStyle>
        </ModalContainer>
    </ModalWrap>
  );
}

export default Modal;
