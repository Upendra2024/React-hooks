import React,{useState,useEffect} from 'react';
import axios from 'axios'; 

export const NormalFetch = () =>{
  const [loading,setLoading] =useState(true);
  const [posts,setPosts] =useState({});
  const [error,setError] =useState('')


useEffect(()=>{
   axios.get('https://jsonplaceholder.typicode.com/posts/1')
   .then( res =>{
     setLoading(false)
     setPosts(res.data)
     setError('')
   })
   .catch(error =>{
    setLoading(false)
    setPosts({})
    setError('something went wrong')
   } )
},[])

  return(
    <div>
      {
        loading ? 'Loading' : posts
      }
      {
        error ? error :null
      }

    </div>
    
  )
}