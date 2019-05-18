import React from "react";
import { inputAction } from "../redux/action/inputAction";
import { sendAction } from "../redux/action/sendAction";
import { connect } from "react-redux";
import CommentsListItems from "../CommentsListItems/CommentsListItems";
import Loader from "react-loader-spinner";
import s from "./Form.module.css";

const Form = ({ inputAction, inputValue, sendAction, comments }) => {
  console.log(comments);
  function send(e) {
    e.preventDefault();
    sendAction(inputValue);
    e.target.reset();
  }

  return (
    <div className={s.Form}>
      <form onSubmit={send}>
        <textarea
          onChange={inputAction}
          placeholder="Write comment"
          className={s.Textarea}
          value={inputValue}
        />
        <input type="submit" value="send" />
      </form>
      <ul>
        {comments ? (
          comments.map(el => <CommentsListItems comment={el} key={el.id} />)
        ) : (
          <Loader type="Plane" color="#00BFFF" height="100" width="100" />
        )}
      </ul>
    </div>
  );
};
const mapStateToProps = state => ({
  inputValue: state.inputValue,
  comments: state.simpleData.comments
});
const mapDispatchToProps = dispatch => ({
  inputAction: e => dispatch(inputAction(e)),
  sendAction: inputValue => dispatch(sendAction(inputValue))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
