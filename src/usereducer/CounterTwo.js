import React, { useReducer } from 'react';

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'Decrement':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'Increment2':
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'Decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'Reset':
      return initialState;
    default:
      return state;
  }
};

export const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count : {count.firstCounter}</div>

      <button
        onClick={() => {
          dispatch({ type: 'Increment', value: 1 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'Decrement', value: 1 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'Increment', value: 5 });
        }}
      >
        Increment 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'Decrement', value: 5 });
        }}
      >
        Decrement 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'Reset' });
        }}
      >
        Reset
      </button>

      <div>Conter2 : {count.secondCounter}</div>
      <button
        onClick={() => {
          dispatch({ type: 'Increment2', value: 10 });
        }}
      >
        Increment 10
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'Decrement2', value: 10 });
        }}
      >
        Decrement 10
      </button>
    </div>
  );
};
