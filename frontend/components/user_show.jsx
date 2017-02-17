import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/user_actions';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "", //for future implementation of posts
      profilePhotoFile: null,
      profilePhotoUrl: null,
      coverPhotoFile: null,
      coverPhotoUrl: null ,
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
    fileReader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: fileReader.result });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  updateProfilePhoto(e) {
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({profilePhotoUrl: fileReader.result });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
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
            <input className="upload-cover" type="file" onChange={this.updateProfilePhoto} />
          </div>
          <div className="prifile-pic-container">
          <img className="profile-pic"
            src={this.props.profileOwner.profile_photo_url} />
          <input className="upload-profile" type="file" onChange={this.updateProfilePhoto} />
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
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
