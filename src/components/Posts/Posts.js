import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {posts.map(post => {
        return (
          <Post
          key={post.id}
          likePost={likePost}
          post={post}
          comments = {post.comments}
          /> // mapping over the posts array which we made in app.js when we made the usestate of posts be equal to the dummydata so that is where posts comes from 

          // post is a variable we out there ourself it can be anything, and the key is mandatory and the key is the post id 

          // likepost and post comes from the props on Post.js since we are creating indivisual post , we need to give it the information that it needs, and  comments comes from the DUMMY-DATA.JS file which is now posts 
        )
      })}
    </div>
  );
};

export default Posts;
