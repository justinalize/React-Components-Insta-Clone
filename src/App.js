
import React, { useState } from 'react';
import Posts from './components/Posts/Posts'
import Search from './components/SearchBar/SearchBar'
import dummyData from './dummy-data'
import './App.css';

const App = () => {
  const [posts, setPosts] = useState(dummyData)
  
  
  const likePost = postId => {
    setPosts(posts.map(post => {
      if(post.id === postId){
        return {...post, likes: post.likes+1} //returns a copy of the post with the likes changed
      }
      return post
    }))
  }; 

  return (
    <div className='App'>
      {<Search />} 
      {<Posts 
      posts={posts} 
      likePost={likePost}
       /> }
    </div>
  );
};  

export default App;
