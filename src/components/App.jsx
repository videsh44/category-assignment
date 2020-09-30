import React from "react";
import { Switch, Router, Route } from "react-router-dom";

import history from "../history";
import { connect } from "react-redux";
import MainPage from "./MainPage";
import "antd/dist/antd.css";

const App = (props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/category-assignment" component={MainPage} />
        <Route path="/" exact component={MainPage} />
      </Switch>
    </Router>
  );
};

export default connect()(App);
