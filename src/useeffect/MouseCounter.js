import React,{useState} from 'react';
import {EffectTwo} from './EffectTwo';

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