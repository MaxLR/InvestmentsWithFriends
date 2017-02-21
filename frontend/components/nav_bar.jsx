import React from 'react';
import { connect } from 'react-redux';
import { signout } from '../actions/session_actions';
import { Link, withRouter, Router } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" }; //for future expansion
    this.signout = this.props.signout.bind(this);
    this.state = { requestsHidden: true };
  }

  componentDidMount() {

  }

  handleSignout() {
    this.signout();
    this.props.router.push('/');
  }

  toggleRequests(e) {
    this.setState({requestsHidden: !this.state.requestsHidden});
  }

  populateRequests() {
    if (this.props.requests) {
      const pendingRequests = this.props.requests
        .map((currRequest) => this.renderRequest(currRequest));
      return (
        <ul className="request-window" hidden={this.state.requestsHidden}>
          {pendingRequests}
        </ul>
      );
    }
  }

  renderRequest(request) {
    return (
      <li className="pending-request" key={request.id}>
        <div className="requester-name">{request.f_name} {request.l_name}</div>
        <button className="request-response accept">Confirm</button>
        <button className="request-response deny">Delete Request</button>
      </li>
    );
  }

  render() {
    return(
      <div className="nav-bar">
        <Link className="home-link" to="/">IWF</Link>

        <div className="nav-profile-section">
          <Link className="profile-link"
            to={`/users/${this.props.currentUser.id}`}>
            {this.props.currentUser.f_name}</Link>
          <div className="requests" onClick={this.toggleRequests.bind(this)}>Requests</div>
          {this.populateRequests()}
          <button className="signout"
            onClick={this.handleSignout.bind(this)}>
            Sign Out
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    requests: state.session.currentUser.pendingFriends
  };
};

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavBar));
