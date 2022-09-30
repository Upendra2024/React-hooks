import React,{useState,useEffect} from 'react';

export const EffectTwo = () =>{
  const [X,setX]= useState(0);
  const [Y,setY]= useState(0);

  const logMousePosition  =(e)=>{
    console.log('moseposition')
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(()=>{
    console.log('Effect is called')
    window.addEventListener('mousemove',logMousePosition)
    // this return function is used for unmount the element from the DOM
    return ()=>{
      console.log('Effect un Mounted')
      window.removeEventListener('mousemove',logMousePosition)
    }
  },[])
  return(
    <div>
    X - {X}
    Y - {Y}
    </div>
  )
}