import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}\
      {comments.map(comment=>{
        return (
          <Comment 
          key = {comment.id}
          comment = {comment}
          
          />
        ) // everytime we map thru a prop to return a  created component, we need to give it the data from its parent , so in this case we give it comment because comment is the prop of Comment.js which we are importing and key is mandatory
      })}
    </div>
  );
};

export default Comments;
