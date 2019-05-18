import React from "react";

const CommentsListItems = ({ comment }) => {
  return (
    <li>
      <p>{comment.id}</p>
      <p>{comment.body}</p>
    </li>
  );
};

export default CommentsListItems;
