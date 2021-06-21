import styled from "styled-components";

const ModalStyle = styled.div`
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
  display:block;
  z-index: 1011;
  border-radius : 2px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  display: ${props => props.isVisible ? "block" : "none" };
  pointer-events: ${props => props.isVisible ? "auto" : "none" };
  .popup-modal__close {
    position: absolute;
    font-size: 2rem;
    right: -10px;
    top: -10px;
    cursor: pointer;
  }
`;

const ButtonStyle = styled.div`
  text-align: center;
`;

export default function Modal({ isVisible , onSetIsVisible , data , company }){

  if(!data) return null

  return <ModalStyle isVisible={isVisible}>
    <i 
      className="el-icon-circle-close popup-modal__close"
      onClick={() => onSetIsVisible(false) }
    >  
    </i>
    <p>
      {`${company}의 사원이 추가되었습니다.`}
    </p>
    <ButtonStyle>
      <span 
        className="el-button el-button--default"
        onClick={() => onSetIsVisible(false) }>
          확인
      </span>
    </ButtonStyle>
  </ModalStyle>
}