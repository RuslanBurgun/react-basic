import React from 'react';

export default function CommentList ({ comments } ){
  const commentElement = comments.map((comment) =>  <li key="{comment.id}">{comment.text}</li>);
  return (
      <ul>
        {commentElement}
      </ul>
  )
}