import React,{useState} from 'react';
import {Title} from './Title';
import {Count} from './Count';
import {Button} from '/Button';


export const ParentComp = () =>{

  const [age,setAge] = useState(25)
  const [salary,setSalary] = useState(5000)

  const ageIncrement = () =>{
       setAge( age +1)
  }
  const salaryIncrement = () =>{
      setSalary(salary + 1000)
  }
  return(
    <div>
      <Title/>
      <Count  text = "Age" Count ={age}/>
      <Button onClick = {o}/>

    </div>
  )
}