import React from 'react';
import { connect } from 'react-redux';
import { signout } from '../actions/session_actions';
import { Link, withRouter, Router } from 'react-router';
import { updateFriendship, deleteFriendship } from '../actions/friendship_actions';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.signout = this.props.signout.bind(this);
    this.state = { requestsHidden: true };
  }

  handleSignout() {
    this.signout();
    this.props.router.push('/');
  }

  toggleRequests(e) {
    this.setState({ requestsHidden: !this.state.requestsHidden });
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

  handleAccept(friendshipId) {
    return (e) => {
      e.preventDefault();
      this.props.updateFriendship(friendshipId, "accepted");
    };
  }

  handleReject(friendshipId) {
    return (e) => {
      e.preventDefault();
      this.props.deleteFriendship(friendshipId);
    };
  }

  renderRequest(request) {
    return (
      <li className="pending-request" key={request.id}>
        <Link to={`/users/${request.friender_id}`}>
          <img className="request-profile-photo"
          src={request.profilePhotoUrl} />
        </Link>
        <Link className="requester-name"
          to={`/users/${request.friender_id}`}>
          {request.f_name} {request.l_name}
        </Link>
        <button className="request-response accept"
           onClick={this.handleAccept(request.id)}>
           Confirm
         </button>
        <button className="request-response deny"
          onClick={this.handleReject(request.id)}>
          Delete Request
        </button>
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
          <div className="requests"
            onClick={this.toggleRequests.bind(this)}>
            <i className="fa fa-users" aria-hidden="true"></i>
          </div>
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
    requests: state.session.currentUser.pendingRequests
  };
};

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
  updateFriendship: (friendshipId, status) =>
    dispatch(updateFriendship(friendshipId, status)),
  deleteFriendship: (friendshipId) => dispatch(deleteFriendship(friendshipId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavBar));
