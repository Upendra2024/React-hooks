import React,{useState,useEffect} from 'react';
 
export const IncorrDependency =()=>{
  const [count,setCount] = useState(0)
   //  here we put state as a dependency
  // const tick = ()=>{
  //   setCount(
  //      count +1
  //     )
  // }

  // useEffect (()=>{
  //   const intervel = setInterval(tick,1000)
  //   return ()=>{
  //     clearInterval(intervel)
  //   }
  // },[count])

// here we can use preCount
  const tick = ()=>{
    setCount(prevCount =>
       prevCount +1
    )
  }

  useEffect (()=>{
    const intervel = setInterval(tick,1000)
    return ()=>{
      clearInterval(intervel)
    }
  },[])
  return (
    <div>
      {count}
    </div>
  )
}