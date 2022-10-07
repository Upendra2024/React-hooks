import React, { useReducer } from 'react';
import './style.css';
import { StateOne } from './usestate/StateOne';
import { StateTwo } from './usestate/StateTwo';
import { EffectOne } from './useeffect/EffectOne';
import { EffectTwo } from './useeffect/EffectTwo';
import { MouseCounter } from './useeffect/MouseCounter';
import { IncorrDependency } from './useeffect/IncorrDependency';
import { FetchData } from './useeffect/FetchData';
// import { ComponentC } from './usecontext/ComponentC';
import { CounterOne } from './usereducer/CounterOne';
import { CounterTwo } from './usereducer/CounterTwo';
import { CounterThree } from './usereducer/CounterThree';
import { ComponentA } from './usereducer/ComponentA';
import { ComponentB } from './usereducer/ComponentB';
import { ComponentC } from './usereducer/ComponentC';
import {NormalFetch} from './usereducer/NormalFetch';


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'Increment':
      return state + 1;
    case 'Decrement':
      return state - 1;
    case 'Reset':
      return initialState;
    default:
      return state;
  }
};
export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
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
      {/* <CounterThree /> */}
      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        Count : {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}
      <NormalFetch/>

    </div>
  );
}
