import React, { useContext } from 'react';
import { CountContext } from '../App';
export const ComponentD = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentD -
      <button
        onClick={() => {
          countContext.countDispatch('Increment');
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          countContext.countDispatch('Decrement');
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          countContext.countDispatch('Reset');
        }}
      >
        Reset
      </button>
    </div>
  );
};
