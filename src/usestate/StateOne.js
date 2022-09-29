import React,{useState} from 'react';

 export const StateOne = ()=> {
   const [state,setState] = useState({firstName:'',lastName:''})
   return(
     <div>
       <input type="text" name ="firstName" value={state.firstName} onChange ={ e => setState({...state, firstName : e.target.value})}/>
       <input type="text" name ="lastName" value={state.lastName} onChange ={e => setState({...state,lastName : e.target.value})}/>
       <div>
         First Name : {state.firstName} <br/>
         Last Name  : {state.lastName}
       </div>

     </div>
   )
 }
