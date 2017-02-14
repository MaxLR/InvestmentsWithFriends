//next step: fix rendering of data within the input fields.

import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { signin, signup, signout } from '../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signin: { email: "", password: ""},
      signup: { email: "", password: "", f_name: "",
        l_name: "", birthday: "", sex: ""}
    };
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  attemptSignin() {
    this.props.signin({email: this.state.signin.email,
      password: this.state.signin.password});
  }

  render() {
    return (
      <div>
        <section className="signin">
          <label>Email:
            <input type="text"
              value={this.state.signin.email}
              onChange={this.update("signin.email")}
              className="signin-username" />
          </label>
          <label>Password:
            <input type="password"
              value={this.state.signin.password}
              onChange={this.update("signin.password")}
              className="signin-password" />
          </label>
          <button onClick={this.attemptSignin}>Sign In</button>
        </section>

        <section className="signup">
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  signin: (user) => dispatch(signin(user)),
  signup: (user) => dispatch(signup(user)),
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
