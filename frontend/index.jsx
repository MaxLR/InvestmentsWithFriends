import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { signup, signin, signout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    window.store = store;
    ReactDOM.render(<h1>Welcome to Investments With Friends</h1>, root);
});

window.signup = signup;
window.signin = signin;
window.signout = signout;
