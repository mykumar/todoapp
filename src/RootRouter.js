import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App.js";
import TaskPage from "./containers/TaskPage";

const RootRouter = () => (
  <BrowserRouter>
    <App>
      <div>
        <Switch>
          <Route exact path="/" component={TaskPage} />
        </Switch>
      </div>
    </App>
  </BrowserRouter>
);

export default RootRouter;
