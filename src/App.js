import React from "react";
import "./style.css";
import {StateOne} from './usestate/StateOne';
import {StateTwo} from './usestate/StateTwo';
export default function App() {
  return (
    <div>
      <h1>UseState Exmples</h1>
      <p>here we take previous state  of properties(as a spred operator not need in class comp) while updatiiong state properties</p>
      {/* <StateOne/> */}
      <StateTwo/>
    </div>
  );
}
