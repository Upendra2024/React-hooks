import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const FetchData = () => {
  //fetch all data in the endpoint
  // const [posts, setPosts] = useState([]);

  //fetching individul data in the endpoint through controlled component
  const [post, setPost] = useState({});
  const [id, setId] = useState('');
  const [idFromButtonClick,setIdFromButtonClick] = useState(1);

const clickHandler =()=>{
   setIdFromButtonClick(id);
 }

  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => {
  //       console.log(res);
  //       setPosts(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res)
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type='button'  onClick={clickHandler}>Fetch Post</button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};
