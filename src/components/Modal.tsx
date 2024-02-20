import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface ModalProps{
    title: string | null | undefined;
    latlng: google.maps.LatLng | null | undefined;
    onClick? : () => void;
}

const ModalWrap = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
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
    height: 70vh;
`;

const CloseButtonStyle = styled.div`
    display: flex;
    justify-content: flex-end;

    :hover{
        cursor: pointer;
    }
`

const ButtonboxStyle = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: center;
    margin: 10px 0px;
`

const InfoContainerStyle = styled.div`

`

const WeatherContainerStyle = styled.div`
    
`

const WeatherDivStyle = styled.div`
    padding: 10px 0px 0px 0px;
`


const Modal = ({ title, latlng, onClick }: ModalProps) =>{
    const [weatherData, setWeatherData] = useState<any>(null);
  
    useEffect(() => {
        if(latlng){
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng.lat()}&lon=${latlng.lng()}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)
                .then(response => response.json())
                .then(data => setWeatherData(data))
                .catch(error => console.error('Error:', error));
        }

        axios.get('http://localhost:8080/api/fire-Info')
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.error('Error:', error);
        });

    }, [latlng]);

    const getWindDirection = (deg: number) => {
        const directions = ['North', 'Northeast', 'East', 'Southeast', 'South', 'Southwest', 'West', 'Northwest'];
        const value = Math.floor((deg + 22.5) / 45);
        return directions[value % 8];
     };

    const navigate = useNavigate();

    const onSubmit = (title: string) => {
        navigate('/reportwrite', { state: { title } });
    }
    
  return (
    <ModalWrap>
        <ModalBackGround onClick={onClick} />
        <ModalContainer>
            <CloseButtonStyle>
                <FontAwesomeIcon icon={faClose} onClick={onClick}/>
            </CloseButtonStyle>

            <InfoContainerStyle>
                {title && (
                    <>
                        <h5>{title}</h5>
                        <ButtonboxStyle>
                            <Button text="Write Report" onClick={() => onSubmit(title)} />
                        </ButtonboxStyle>
                    </>
                )}
                {weatherData && (
                    <WeatherContainerStyle>
                        <WeatherDivStyle>Current temperature : {(weatherData.main.temp - 273.15).toFixed(2)} °C</WeatherDivStyle>
                        <WeatherDivStyle>Weather Information : {weatherData.weather[0].main} - {weatherData.weather[0].description}</WeatherDivStyle>
                        <WeatherDivStyle>Humidity : {weatherData.main.humidity} %</WeatherDivStyle>
                        <WeatherDivStyle>Wind direction : {getWindDirection(weatherData.wind.deg)}</WeatherDivStyle>
                        <WeatherDivStyle>Wind Speed : {weatherData.wind.speed} m/s</WeatherDivStyle>
                        <WeatherDivStyle>Cloud : {weatherData.clouds.all} %</WeatherDivStyle>
                    </WeatherContainerStyle>
                )}
                
            </InfoContainerStyle>
        </ModalContainer>
    </ModalWrap>
  );
}

export default Modal;
