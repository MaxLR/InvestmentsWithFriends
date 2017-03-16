import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Router } from 'react-router';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = { friends: this.props.profileOwner.friends };
  }

  componentWillReceiveProps({ profileOwner }) {
    if (!(profileOwner.id === this.props.profileOwner.id)) {
      this.setState({
        friends: profileOwner.friends
      });
    }
  }

  renderFriends() {
    const friends = [];
    for (let i = 0; i < 9 && i < this.state.friends.length; i++) {
      friends.push(this.renderFriend(this.state.friends[i]));
    }

    return friends;
  }

  renderFriend(friend) {
    return(
      <div key={`${friend.id}`} className="friend-display">
        <Link
        to={`/users/${friend.friendId}`}
        className="user-link">
          <img className="friend-profile-photo"
            src={friend.profilePhotoUrl} />
          <div className="friend-name">{friend.fName} {friend.lName}</div>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="friends-panel">
        <div className="friends-header">{`${this.props.profileOwner.f_name}'s Friends`}</div>
        <div className="friends-list">
          {this.renderFriends()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profileOwner: state.user.profileOwner
});

export default connect(
  mapStateToProps,
  null
)(withRouter(Friends));
