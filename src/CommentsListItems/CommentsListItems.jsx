import React from "react";
import s from "./CommentsListItems.module.css";

const CommentsListItems = ({ comment }) => {
  return (
    <li className={s.Item}>
      <p className={s.Id}>{comment.id}</p>
      <p>{comment.body}</p>
    </li>
  );
};

export default CommentsListItems;
