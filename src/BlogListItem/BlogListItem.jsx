import React from "react";
import { NavLink } from "react-router-dom";
import s from "./BlogListItem.module.css";

const BlogListItem = ({ author, title, text, date, id }) => {
  return (
    <div className={s.BlogListItem}>
      <p>
        {author}
        <span className={s.Date}>{date}</span>
      </p>
      <p>{title}</p>
      <p>{text}</p>
      <NavLink className="news__btn" to={`/${id}`}>
        Read the full post
      </NavLink>
    </div>
  );
};

export default BlogListItem;
