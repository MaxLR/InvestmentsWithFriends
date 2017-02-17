import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Home from './home';
import UserShow from './user_show';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="users/:id" component={ UserShow } />
      </Route>
    </Router>
  </Provider>
);

export default Root;

//home will be index route for '/' w/ conditional render for auth/news feed
//render nav bar in app unless !logged_in
// <Route path="/users/:id" component={ UserShow }/>
