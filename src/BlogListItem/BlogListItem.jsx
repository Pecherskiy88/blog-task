import React from "react";
import { NavLink } from "react-router-dom";
import s from "./BlogListItem.module.css";

const BlogListItem = ({ author, title, text, date, id }) => {
  return (
    <div className={s.BlogListItem}>
      <p className={s.Author}>
        {author}
        <span className={s.Date}>{date}</span>
      </p>
      <p className={s.Title}>{title}</p>
      <p className={s.Text}>{text}</p>
      <NavLink className={s.Btn} to={`/${id}`}>
        Read the full post >>
      </NavLink>
    </div>
  );
};

export default BlogListItem;
