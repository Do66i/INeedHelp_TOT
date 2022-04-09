import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Join from "./Join";
import LoginModal from "./LoginModal";
import styled from "styled-components";
import LoginPage from "../Pages/LoginPage";

export const ClickBtn = styled.button`
  background-color: rgb(70, 125, 196);
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 20px;
  cursor: grab;
`;

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
export const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  border-radius: 10px;
  background-color: #ffffff;
  width: 500px;
  height: 500px;

  > span.close-btn {
    color: gray;
    margin-top: 5px;
    cursor: pointer;
  }

  > div.desc {
    margin-top: 25px;
    color: red;
  }
`;

function Home() {
  const [clicktoLogin, setClickToLogin] = useState(false);
  const clickHandlerToLogin = () => {
    setClickToLogin(!clicktoLogin);
  };
  const [clicktoJoin, setClicktoJoin] = useState(false);
  const clickHandlerToJoin = () => {
    setClicktoJoin(!clicktoJoin);
  };
  return (
    <div>
      <ClickBtn onClick={clickHandlerToLogin}>{clicktoLogin === false ? "Login" : null}</ClickBtn>
      {clicktoLogin === true ? (
        <ModalContainer>
          <ModalBackdrop onClick={clickHandlerToLogin}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <span onClick={clickHandlerToLogin} className="close-btn">
                &times;
              </span>
              <div className="desc">
                <LoginPage />
              </div>
            </ModalView>
          </ModalBackdrop>
        </ModalContainer>
      ) : null}

      <ClickBtn onClick={clickHandlerToJoin}>{clicktoJoin === false ? "Join" : null}</ClickBtn>
      {clicktoJoin === true ? (
        <ModalContainer>
          <ModalBackdrop onClick={clickHandlerToJoin}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <span onClick={clickHandlerToJoin} className="close-btn">
                &times;
              </span>
              <div className="desc">
                <Join />
              </div>
            </ModalView>
          </ModalBackdrop>
        </ModalContainer>
      ) : null}

      <Switch>
        <Route path="/login">
          <LoginModal />
        </Route>
        <Route path="/join">
          <Join />
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
