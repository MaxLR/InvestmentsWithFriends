import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../actions/user_actions';
import { createFriendship } from '../actions/friendship_actions';
import { isFriend, isPendingFriend } from '../util/util';
import NewsFeed from './news_feed';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "", //for future implementation of posts
      profilePhotoUrl: null,
      profilePhotoFile: null,
      coverPhotoUrl: null
    };

    this.createFriendship = this.props.createFriendship.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.id !== newProps.params.id) {
      this.props.fetchUser(newProps.params.id);
    }
  }

  handleFriendRequest(friendeeId) {
    return (e) => {
      return this.createFriendship(friendeeId);
    };
  }

  updateFile(photoName) {
    return (e) => {
      return this.setState({[photoName]: e.currentTarget.files[0]});
    };
  }

  updateProfilePhoto(e) {
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        profilePhotoFile: file,
        profilePhotoUrl: fileReader.result },
        () => {
          let formData = new FormData();
          let tempFile = this.state.profilePhotoFile;
          formData.append("user[profile_photo]", tempFile);
          this.props.updateUser(this.props.profileOwner.id, formData);
        });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  updateCoverPhoto(e) {
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({coverPhotoUrl: fileReader.result });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }

    this.props.updateUser({id: this.props.profileOwner,
      coverPhotoUrl: this.state.coverPhotoUrl});
  }

  requestButton() {
    if (this.props.profileOwner.id === this.props.currentUser.id){
      return (
        <div/>
      );
    } else if (this.props.isFriend) {
      return (
        <div className="friend-button accepted-friend">Friends</div>
      );
    } else if (this.props.isPendingFriend) {
      return (
        <div className="friend-button pending-friend">Friend Request Sent</div>
      );
    } else {
      return (
        <button className="friend-button non-friend"
          onClick={this.handleFriendRequest(this.props.profileOwner.id)}>
          Add Friend
        </button>
      );
    }
  }

  render() {
    if (!this.props.profileOwner) {
      return (
        <h2>Loading</h2>
      );
    } else {
      return (
        <div>
          <div className="profile-cover">
            <div className="cover-section">
              <img className="cover-pic"
                src={this.props.profileOwner.cover_photo_url} />
              <input className="upload-cover" type="file"
                onChange={this.updateCoverPhoto.bind(this)} />
            </div>
            <div className="prifile-pic-container">
            <img className="profile-pic"
              src={this.props.profileOwner.profile_photo_url} />
            <input className="upload-profile" type="file"
              onChange={this.updateProfilePhoto.bind(this)} />
            </div>
            <div className="filter-bar">
              <button className="filter-option">Timeline</button>
            </div>
            {this.requestButton()}
          </div>
          <div className="profile-body">
            <NewsFeed feedType="user"/>
          </div>
        </div>
      );
    }
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    profileOwner: state.user.profileOwner,
    currentUser: state.session.currentUser,
    isFriend: isFriend(state.session.currentUser, state.user.profileOwner),
    isPendingFriend: isPendingFriend(state.session.currentUser, state.user.profileOwner)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateUser: (userId, formData) => dispatch(updateUser(userId, formData)),
  createFriendship: (friendeeId) => dispatch(createFriendship(friendeeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
