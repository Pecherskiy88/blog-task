import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { asyncSimple } from "../redux/action/fetchSimpleAction";
import Form from "../Form/Form";
import s from "./SinglePage.module.css";

class SinglePage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetch(id);
  }
  render() {
    const { simpleData } = this.props;

    return (
      <div className={s.SinglePage}>
        <div className={s.Article}>
          <NavLink to="/">BACK</NavLink>
          <p>
            {simpleData.author}
            <span>{simpleData.date}</span>
          </p>
          <p>{simpleData.title}</p>
          <p>{simpleData.body}</p>
        </div>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  simpleData: state.simpleData
});
const mapDispatchToProps = dispatch => ({
  fetch: id => dispatch(asyncSimple(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePage);
