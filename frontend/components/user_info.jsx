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
          <div><div>Birthday:</div><div>{this.state.birthday}</div></div>
          <div><div>Hometown:</div><div>{this.state.hometown}</div></div>
          <div><div>Current City:</div><div>{this.state.currentCity}</div></div>
          <div><div>Relationship:</div><div>{this.state.relationship}</div></div>
          <div><div>School:</div><div>{this.state.school}</div></div>
          <div><div>Employer:</div><div>{this.state.employer}</div></div>
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
