import React from 'react';
import './style.css';
import { StateOne } from './usestate/StateOne';
import { StateTwo } from './usestate/StateTwo';
import { EffectOne } from './useeffect/EffectOne';
import { EffectTwo } from './useeffect/EffectTwo';
import { MouseCounter } from './useeffect/MouseCounter';
import { IncorrDependency } from './useeffect/IncorrDependency';
import { FetchData } from './useeffect/FetchData';
import { ComponentC } from './usecontext/ComponentC';
import { CounterOne } from './usereducer/CounterOne';
import { CounterTwo } from './usereducer/CounterTwo';
import { CounterThree } from './usereducer/CounterThree';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export default function App() {
  return (
    <div>
      <h1>Hooks Exmples</h1>
      <p>
        here we take previous state of properties(as a spred operator not need
        in class comp) while updatiiong state properties
      </p>
      {/* <StateOne/> */}
      {/* <StateTwo/> */}

      {/* <EffectOne/> */}
      {/* <EffectTwo/> */}
      {/* <MouseCounter/> */}
      {/* <IncorrDependency/> */}
      {/* <FetchData/> */}

      {/* <UserContext.Provider value={'Upendra'}>
        <ChannelContext.Provider value={'UICoder'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <CounterOne /> */}
      {/* <CounterTwo/> */}
      <CounterThree />
    </div>
  );
}
