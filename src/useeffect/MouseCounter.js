import React,{useState} from 'react';
import {EffectTwo} from './EffectTwo';
//here button is used for toggle
export const MouseCounter = () =>{
  const [display,setDisplay] = useState (true);
  return(
    <div>
      <button onClick = {()=> setDisplay(!display)}>Toggle Display</button>
       {
        display && <EffectTwo/>
       }
    </div>
  )
}