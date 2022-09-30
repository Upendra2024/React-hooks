import React,{useState,useEffect} from 'react';
 
export const IncorrDependency =()=>{
  const [count,setCount] = useState(0)
   
  const tick = ()=>{
    setCount(
       count +1
      )
  }

  useEffect (()=>{
    const intervel = setInterval(tick,1000)
    return ()=>{
      clearInterval(intervel)
    }
  },[count])
  return (
    <div>
      {count}
    </div>
  )
}