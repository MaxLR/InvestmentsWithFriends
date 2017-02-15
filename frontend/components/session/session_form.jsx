import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { signin, signup, signout } from '../../actions/session_actions';
import SigninForm from './signin_form';
import SignupForm from './signup_form';

const SessionForm = () => {
  return (
    <div>
      <section className="signin">
        <h1 className="app-title">Investments With Friends</h1>
        <SigninForm />
      </section>

      <section className="signup">
        <SignupForm />
      </section>
    </div>
  );
};

export default SessionForm;
