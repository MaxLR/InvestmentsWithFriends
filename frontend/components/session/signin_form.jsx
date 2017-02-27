import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  attemptSignin(e) {
    e.preventDefault();
    this.props.signin(this.state);
  }

  signInGuest(e) {
    e.preventDefault();
    this.props.signin({ email: "max@email.com", password: "asdfasdf" });
  }

  update(field) {
    return e => {
      return this.setState({[field]: e.currentTarget.value});
    };
  }

  fetchError() {
    let error;
    if (this.props.errors[0] === "Invalid username/password") {
      error = "Invalid username/password";
    }

    return error;
  }

  render() {
    const error = this.fetchError();

    return(
      <form className="signin-form">
        <section className="username-group">
          <label>Email</label>
          <input type="text"
            className="signin-input"
            value={this.state.email || ""}
            onChange={this.update("email")}/>
        </section>
        <section className="password-group">
          <label>Password</label>
          <input type="password"
            className="signin-input"
            value={this.state.password || ""}
            onChange={this.update("password")}/>
        </section>
        <input
          type="submit"
          value="Sign In"
          className="signin-button"
          onClick={this.attemptSignin.bind(this)}/>
        <div className="signin-error">{error}</div>
        <button
          className="signin-button"
          onClick={this.signInGuest.bind(this)}>Guest Sign In</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  signin: (user) => dispatch(signin(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninForm);
