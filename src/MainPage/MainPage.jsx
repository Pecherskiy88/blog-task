import React from "react";
import { Switch, Route } from "react-router-dom";
import All from "../All/All";
import Article from "../Article/Article";

const MainPage = () => {
  return (
    <Switch>
      <Route exact path="/" component={All} />
      <Route path="/:id" component={Article} />
    </Switch>
  );
};

export default MainPage;
