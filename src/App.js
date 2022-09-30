import React from "react";
import "./style.css";
import {StateOne} from './usestate/StateOne';
import {StateTwo} from './usestate/StateTwo';
import {EffectOne} from './useeffect/EffectOne';
import {EffectTwo} from './useeffect/EffectTwo';
import {MouseCounter} from './useeffect/MouseCounter';
import {IncorrDependency} from './useeffect/IncorrDependency';
export default function App() {
  return (
    <div>
      <h1>Hooks Exmples</h1>
      <p>here we take previous state  of properties(as a spred operator not need in class comp) while updatiiong state properties</p>
      {/* <StateOne/> */}
      {/* <StateTwo/> */}

      {/* <EffectOne/> */}
     {/* <EffectTwo/> */}
     {/* <MouseCounter/> */}
     <IncorrDependency/>

    </div>
  );
}
