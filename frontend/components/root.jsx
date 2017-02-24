import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Home from './home';
import UserShow from './user_show';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory } onUpdate={ () => window.scrollTo(0,0)}>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="users/:id" component={ UserShow } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
