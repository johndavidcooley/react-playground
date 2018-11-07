import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import GoogleMaps from './GoogleMaps/GoogleMaps';
import LifecycleMethods from './LifecycleMethods/LifecycleMethods';
import Transitions from './Transitions/Transitions';
import CSSFlipAnimations from './CSSFlipAnimations/CSSFlipAnimations';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/google-maps" component={GoogleMaps}></Route>
      <Route exact path="/lifecycle-methods" component={LifecycleMethods}></Route>
      <Route exact path="/transitions" component={Transitions}></Route>
      <Route exact path="/css-flip-animations" component={CSSFlipAnimations}></Route>
    </Switch>
  </BrowserRouter>
)

export default Router;