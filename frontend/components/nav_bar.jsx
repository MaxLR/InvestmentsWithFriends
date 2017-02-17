import React from 'react';
import { connect } from 'react-redux';
import { signout } from '../actions/session_actions';
import { Link } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" }; //for future expansion
    this.signout = this.props.signout.bind(this);
  }

  render() {
    return(
      <div>
        <Link to="/">IWF</Link>
        <Link to="/users/${this.props.currentUser.id}">
          {this.props.currentUser.f_name}</Link>
        <button onClick={this.signout}>Sign Out</button>
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
)(NavBar);
