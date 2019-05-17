import React, { Component } from "react";
import Header from "../Header/Header";
import BlogList from "../BlogList/BlogList";
import { asyncData } from "../redux/action/fetchDataAction";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.fetch();
  }
  render() {
    return (
      <div>
        <Header />
        <BlogList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(asyncData())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
