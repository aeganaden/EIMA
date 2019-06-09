// Libs
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

// Screens
import Home from '@/screens/Home';
import Welcome from '@/screens/Welcome';
import Lesson from '@/screens/Lesson';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/lesson" component={Lesson} />
    </Switch>
  </HashRouter>
);

export default Routes;
