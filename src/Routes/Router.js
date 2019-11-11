import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Lainnya from "../container/PageEmpty";
import Event from "../container/EventContainer";
import Home from "../container/DashboardContainer";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/member" component={Home} />
        <Route path="/event" component={Event} />
        <Route path="/empty" component={Lainnya} />
      </Switch>
    </BrowserRouter>
  );
}
