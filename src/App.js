import React from 'react';
import { useState, useEffect, useRef } from "react";
import "./App.css";
import MainPage from "./sections/MainPage";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import styled from 'styled-components';
import Login from './sections/Login';



function App() {

  const [scrollIndex, setScrollIndex] = useState(1);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userId.userId);
  let token = localStorage.getItem('token');
  console.log(token, "token?")
  let momentumAnimation = useSelector((state) => state.legacy.momentumAnimation);
  const momentumLowerButton = useSelector((state) => state.legacy.momentumLowerButton);


  return (
    <div>
      <div>{token ? <MainPage/> : <Login />}</div>
      {/* <div>{user === null ? <Login /> : <MainPage/>}</div> */}
      
    </div>
  );
}

export default App;

