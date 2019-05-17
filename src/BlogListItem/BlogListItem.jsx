import React from "react";
import s from "./BlogListItem.module.css";

const BlogListItem = ({ author, title, text, date }) => {
  return (
    <div className={s.BlogListItem}>
      <p>
        {author}
        <span>{date}</span>
      </p>
      <p>{title}</p>
      <p>{text}</p>
      <button>Read</button>
      <button>comment</button>
    </div>
  );
};

export default BlogListItem;
