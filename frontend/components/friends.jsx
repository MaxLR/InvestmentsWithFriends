import React from 'react';
import { connect } from 'react-redux';

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
        <img className="friend-profile-photo"
          src={friend.profilePhotoUrl} />
        <div className="friend-name">{friend.fName} {friend.lName}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="friends-panel">
        {this.renderFriends()}
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
)(Friends);
