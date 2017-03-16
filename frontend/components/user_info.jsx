import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions/user_actions';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birthday: this.props.profileOwner.birthday,
      hometown: this.props.profileOwner.hometown,
      currentCity: this.props.profileOwner.currentCity,
      relationship: this.props.profileOwner.relationship,
      school: this.props.profileOwner.school,
      employer: this.props.profileOwner.employer
    };
  }

  render() {
    return(
      <div className="user-info">
        <div className="info-wrapper">
          <div className="info-header">{`About ${this.props.profileOwner.f_name}`}</div>
          <div className="info-item">
            <div className="info-title">Birthday:</div>
            <div>{this.state.birthday}</div>
          </div>
          <div className="info-item">
            <div className="info-title">Hometown:</div>
            <div>{this.state.hometown}</div>
          </div>
          <div className="info-item">
            <div className="info-title">Current City:</div>
            <div>{this.state.currentCity}</div>
          </div>
          <div className="info-item">
            <div className="info-title">Relationship:</div>
            <div>{this.state.relationship}</div>
          </div>
          <div className="info-item">
            <div className="info-title">School:</div>
            <div>{this.state.school}</div>
          </div>
          <div className="info-item">
            <div className="info-title">Employer:</div>
            <div>{this.state.employer}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profileOwner: state.user.profileOwner,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateUser: (userId, formData) => dispatch(updateUser(userId, formData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
