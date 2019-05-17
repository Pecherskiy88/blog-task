import React, { Component } from "react";
import { asyncData } from "../redux/action/fetchDataAction";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import MainPage from "../MainPage/MainPage";

class App extends Component {
  componentDidMount() {
    this.props.fetch();
  }
  render() {
    const { fetchData } = this.props;
    return (
      <div>
        {fetchData.length ? (
          <MainPage />
        ) : (
          <Loader type="Plane" color="#00BFFF" height="100" width="100" />
        )}
      </div>
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
