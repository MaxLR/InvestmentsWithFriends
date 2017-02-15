import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  attemptSignin() {
    this.props.signin(this.state);
  }

  signInGuest() {
    this.props.signin({ email: "jwu@gmail.com", password: "wizardhat1" });
  }

  update(field) {
    return e => {
      return this.setState({[field]: e.currentTarget.value});
    };
  }

  render() {
    return(
      <div className="signin-form">
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
        <button
          className="signin-button"
          onClick={this.attemptSignin.bind(this)}>Sign In</button>
        <button
          className="signin-button"
          onClick={this.signInGuest.bind(this)}>Sign In as Guest</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  signin: (user) => dispatch(signin(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninForm);
