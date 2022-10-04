import React, { useReducer } from 'react';

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

export const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count : {count}</div>
      <button
        onClick={() => {
          dispatch('Increment');
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch('Decrement');
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch('Reset');
        }}
      >
        Reset
      </button>

      <div>Count : {count2}</div>
      <button
        onClick={() => {
          dispatch2('Increment');
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch2('Decrement');
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch2('Reset');
        }}
      >
        Reset
      </button>
    </div>
  );
};
