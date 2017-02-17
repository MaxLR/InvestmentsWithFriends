import React from 'react';
import { connect } from 'react-redux';
import { signout } from '../actions/session_actions';
import { Link, withRouter, Router } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" }; //for future expansion
    this.signout = this.props.signout.bind(this);
  }

  handleSignout() {
    this.signout();
    this.props.router.push('/');
  }

  render() {
    return(
      <div className="nav-bar">
        <Link className="home-link" to="/">IWF</Link>

        <div className="nav-profile-section">
          <Link className="profile-link"
            to={`/users/${this.props.currentUser.id}`}>
            {this.props.currentUser.f_name}</Link>
          <button className="signout" onClick={this.handleSignout.bind(this)}>Sign Out</button>
        </div>
      </div>
    );
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
)(withRouter(NavBar));
