import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export const Modal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <>
      <ModalOverlay>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <h4>Add new material modal</h4>
          <p>
            модалка searcParams га жараша ачылып жабылыш керек,ачык болсо page
            refresh болсо дагы ачылып туруш керек!!!тут могли быть
            дополнительные инпуты но не захотел усложныть вашу жизнь эхх
            байкуштар кыйналдынар окшойт ээ? роутер менен
          </p>
          <button onClick={onClose}>Close modal</button>
        </ModalContent>
      </ModalOverlay>
    </>,
    document.getElementById("modal")
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 35px;
  width: 43%;
  border-radius: 4px;
  box-sizing: border-box;
  /* text-align: end; */
  h4{
    margin: 0;
  }
  button{
    text-align: end;
  }
`;
