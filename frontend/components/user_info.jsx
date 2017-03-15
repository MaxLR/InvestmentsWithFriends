import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions/user_actions';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birthday: this.props.profileOwner.birthday,
      hometown: this.props.profileOwner.hometown,
      relationship: this.props.profileOwner.relationship,
      school: this.props.profileOwner.school,
      employer: this.props.profileOwner.employer,
      currentCity: this.props.profileOwner.currentCity
    };
  }
}

const mapStateToProps = state => ({
  profileOwner: state.user.profileOwner,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateUser: (userId, formData) => dispatch(updateUser(userId, formData))
});
