import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import GoogleMaps from './GoogleMaps/GoogleMaps';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/google-maps" component={GoogleMaps}></Route>
      <Route exact path="/lifecycle-methods" component={LifecycleMethods}></Route>
    </Switch>
  </BrowserRouter>
)

export default Router;