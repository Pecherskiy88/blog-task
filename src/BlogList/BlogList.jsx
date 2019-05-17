import React from "react";
import s from "./BlogList.module.css";
import BlogListItem from "../BlogListItem/BlogListItem";
import { connect } from "react-redux";

const BlogList = ({ fetchData }) => {
  return (
    <div className={s.BlogList}>
      {fetchData.map(el => (
        <BlogListItem
          author={el.author}
          date={el.date}
          title={el.title}
          text={el.body}
          id={el.id}
          key={el.id}
        />
      ))}
    </div>
  );
};
const mapStateToProps = state => ({
  fetchData: state.fetchData
});

export default connect(
  mapStateToProps,
  null
)(BlogList);
