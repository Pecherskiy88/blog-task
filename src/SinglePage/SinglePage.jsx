import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Form from "../Form/Form";
import s from "./SinglePage.module.css";

const SinglePage = ({ fetchData, match }) => {
  console.log(fetchData);

  const data = fetchData.find(el => el.id === Number(match.params.id));
  return (
    <div className={s.SinglePage}>
      <div className={s.Article}>
        <NavLink to="/">BACK</NavLink>
        <p>
          {data.author}
          <span>{data.date}</span>
        </p>
        <p>{data.title}</p>
        <p>{data.body}</p>
      </div>
      <Form />
    </div>
  );
};

const mapStateToProps = state => ({
  fetchData: state.fetchData
});

export default connect(
  mapStateToProps,
  null
)(SinglePage);
