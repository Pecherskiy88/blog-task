import React from "react";
import { Switch, Route } from "react-router-dom";
import All from "../All/All";
import SinglePage from "../SinglePage/SinglePage";

const MainPage = () => {
  return (
    <Switch>
      <Route exact path="/" component={All} />
      <Route path="/:id" component={SinglePage} />
    </Switch>
  );
};

export default MainPage;
