import React from 'react';
import SessionForm from './session/session_form';
import { connect } from 'react-redux';
import { signout } from '../actions/session_actions';

class Home extends React.Component {
  render() {
    if (this.props.currentUser) {
      return(
        <div>
          <p>Hello: {this.props.currentUser.f_name}!</p>
          <button onClick={this.props.signout.bind(this)}>Sign Out</button>
        </div>
      );
    } else {
      return(
        <div>
          <SessionForm />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
