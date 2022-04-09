import React, { useState } from "react";
import styled from "styled-components";
import SetDiary from "./SetDiary";

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  height: 15rem;
  text-align: center;
  margin: 120px auto;
`;

export const ModalBtn = styled.button`
  background-color: rgb(70, 125, 196);
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 20px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  border-radius: 10px;
  background-color: #ffffff;
  width: 500px;
  height: 500px;

  > span.close-btn {
    margin-top: 5px;
    cursor: pointer;
  }

  > div.desc {
    margin-top: 25px;
    color: rgb(70, 125, 196);
  }
`;

function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>{isOpen === false ? "기록남기기" : "Opened!"}</ModalBtn>
        {isOpen === true ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <span onClick={openModalHandler} className="close-btn">
                &times;
              </span>
              <div className="desc">
                <span>
                  <SetDiary /> 💖
                </span>
              </div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </div>
  );
}

export default LoginModal;
