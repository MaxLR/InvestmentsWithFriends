import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../actions/user_actions';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "", //for future implementation of posts
      profilePhotoUrl: null,
      profilePhotoFile: null,
      coverPhotoUrl: null
    };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.id);
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

  render() {
    if (!this.props.profileOwner) {
      return (
        <h2>Loading</h2>
      );
    } else {
      return (
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
            <button className="filter-open">Open Trades</button>
            <button className="filter-all">All Trades</button>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    profileOwner: state.user.profileOwner,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateUser: (userId, formData) => {
    return dispatch(updateUser(userId, formData));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
