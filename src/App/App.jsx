import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { asyncData } from "../redux/action/fetchDataAction";
import { connect } from "react-redux";
import MainPage from "../MainPage/MainPage";
import Article from "../Article/Article";

class App extends Component {
  componentDidMount() {
    this.props.fetch();
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/:id" component={Article} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  fetchData: state.fetchData
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(asyncData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
