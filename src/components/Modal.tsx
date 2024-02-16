import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faClose } from "@fortawesome/free-solid-svg-icons";

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
    padding: 30px 0px;
    border: 1px solid white;
    background-color: white;
    position: relative;
    z-index: 25;
    width: 360px;
    height: 40vh;
`;

const CloseButtonStyle = styled.div`
    display: flex;

    :hover{
        cursor: pointer;
    }
`

const InfoContainerStyle = styled.div`

`


const Modal = ({ title, latlng, onClick }: ModalProps) =>{
  return (
    <ModalWrap>
        <ModalBackGround onClick={onClick} />
        <ModalContainer>
            <CloseButtonStyle>
                <FontAwesomeIcon icon={faClose} onClick={onClick}/>
            </CloseButtonStyle>

            <InfoContainerStyle>
                여기는 {title && (<h4>{title}</h4>)}
                {latlng && (
                    <p>위도: {latlng.lat()}, 경도: {latlng.lng()}</p>
                )}
            </InfoContainerStyle>
        </ModalContainer>
    </ModalWrap>
  );
}

export default Modal;
