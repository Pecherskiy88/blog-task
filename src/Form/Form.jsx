import React from "react";
import CommentsList from "../CommentsList/CommentsList";
import { inputAction } from "../redux/action/inputAction";
import { connect } from "react-redux";
import s from "./Form.module.css";

const Form = ({ inputAction }) => {
  function send(e) {
    e.preventDefault();
    inputAction(e);
  }
  return (
    <div className={s.Form}>
      <form onSubmit={send}>
        <textarea placeholder="Write comment" className={s.Textarea} />
        <button type="submit" value="">
          Send
        </button>
      </form>
      <CommentsList />
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  inputAction: e => dispatch(inputAction(e))
});
export default connect(
  null,
  mapDispatchToProps
)(Form);
