import React from "react";
import { NavLink } from "react-router-dom";
import s from "./BlogListItem.module.css";

const BlogListItem = ({ author, title, text, date, id }) => {
  return (
    <div className={s.BlogListItem}>
      <p>
        {author}
        <span>{date}</span>
      </p>
      <p>{title}</p>
      <p>{text}</p>
      <NavLink className="news__btn" to={`/${id}`}>
        Читати
      </NavLink>
      <button>comment</button>
    </div>
  );
};

export default BlogListItem;
