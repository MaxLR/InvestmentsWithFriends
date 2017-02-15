import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { signup, signin, signout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore(
      { session: {currentUser: window.currentUser, errors: [] } }
    );
    window.store = store;
    ReactDOM.render(<Root store={ store }/>, root);
});

window.signup = signup;
window.signin = signin;
window.signout = signout;
