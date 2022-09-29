import React,{useState,useEffect} from 'react';

export const EffectOne = () =>{
  const [count,setCount] = useState(0);
  const [state,setState] = useState('');
   useEffect(()=>{
    console.log('Hello upendra')
  },[count])
  return(
    <div>
      <input type="text" name="name" value={state} onChange={(e)=>setState( e.target.value)}/>
      <button onClick= {()=>setCount( count +1)}>click{count} times</button>
      <div>{state}</div>
    </div>
  )
}