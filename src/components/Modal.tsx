import { styled } from "styled-components";

interface ModalProps{
    // position: {};
    camnumber: string;
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
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 30px 0px;
  border: 1px solid white;
  background-color: white;
  position: relative;
  z-index: 25;
  width: 300px;
//   height: 50vh;
`;


const Modal = ({ camnumber, onClick }: ModalProps) =>{
  return (
    <ModalWrap>
        <ModalBackGround onClick={onClick} />
        <ModalContainer>
            <button onClick={onClick}>닫기</button>
            여기는 {camnumber}
        </ModalContainer>
    </ModalWrap>
  );
}

export default Modal;
