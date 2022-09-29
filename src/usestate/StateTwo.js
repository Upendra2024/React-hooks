import React,{useState} from 'react';

 const StateTWo = ()=> {
  const [state,setState] = useState([]);

 const clickHandler =() =>{
    setState([...state,
      {
        id:state.length,
        value : Math.floor(Math.random() * 10) + 1
      
       } ])
  };

  return(
    <div>
      <button onClick={clickHandler}>Add</button>
      <ul>
        {
          state.map(item =>{
            <li key = {item.id}>{item.value}</li>
          })
        }

      </ul>

    </div>
  )
}
export default StateTWo;