import React from "react";

// import { useState } from 'react';
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";
import SetAccount from "./components/SetAccount";
import SetDiary from "./components/SetDiary";
// import Modal from "./components/Modal";
// import Tab from "./components/Tab";
import Login from "./components/Login";
import Home from "./components/Home";

export default function App() {
  return (
    <div>
      <Link to="/">🛖</Link>
      <Link to="/login">LOGIN</Link>
      <Link to="/setDiary">DIARY</Link>
      <Link to="/setAccount">ACCOUT</Link>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/setAccount">
          <SetAccount />
        </Route>
        <Route path="/setDiary">
          <SetDiary />
        </Route>
      </Switch>
    </div>
  );
}
