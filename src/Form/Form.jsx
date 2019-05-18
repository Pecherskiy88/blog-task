import React, { Component } from "react";
import { inputAction } from "../redux/action/inputAction";
import { connect } from "react-redux";
import CommentsListItems from "../CommentsListItems/CommentsListItems";
import Loader from "react-loader-spinner";
import s from "./Form.module.css";
import Axios from "axios";

class Form extends Component {
  state = {
    message: ""
  };
  handleChange = event => {
    this.setState({ message: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    const user = {
      message: this.state.message
    };
    Axios.post(`https://simple-blog-api.crew.red/comments`, { user }).then(
      res => {
        console.log(res);
        console.log(res.data);
      }
    );
  };
  render() {
    return (
      <div className={s.Form}>
        <form onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.handleChange}
            placeholder="Write comment"
            className={s.Textarea}
          />
          <input type="submit" value="send" />
        </form>
        <ul>
          {this.props.comments ? (
            this.props.comments.map(el => (
              <CommentsListItems comment={el} key={el.id} />
            ))
          ) : (
            <Loader type="Plane" color="#00BFFF" height="100" width="100" />
          )}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  comments: state.simpleData.comments
});
const mapDispatchToProps = dispatch => ({
  inputAction: e => dispatch(inputAction(e))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

// inputAction, inputValue, comments;
