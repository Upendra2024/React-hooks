import React,{useReducer,useEffect} from 'react';
import axios from 'axios';

const initialState ={
  loading : true,
  error : '',
  post : {}
}

const reducer = (state,action) =>{
  switch(action.type){
    case 'FETCH_SUCCESS':
    return{
      loading : false,
      post : action.payload,
      error : ''
    }

    case 'FETCH_ERROR':
      return{
        loading :false,
        post : {},
        error : 'something went wrong'
      }
     default:
       return state; 
  }

}

export const ReducerFetch = () =>{
const [state,dispatch] = useReducer(initialState,reducer)

useEffect(()=>{
 axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then((res)=>{
       dispatch({ type:'FETCH_SUCCESS', payload:res.data})
  })
  .catch((error)=>{
      dispatch({type :'FETCH_ERROR'})
  })
},[])

  return(
    <div>
      {state.loading ? 'Loading' : state.post.title}
      {state.error ? state.error : null}
      
    </div>
  )
}