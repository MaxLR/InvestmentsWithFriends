import React from 'react';
import { connect } from 'react-redux';
import { updateUser, fetchUser } from '../actions/user_actions';

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

  componentWillReceiveProps({ profileOwner }) {
    if (!(profileOwner.id === this.props.profileOwner.id)) {
      this.setState({
        birthday: profileOwner.birthday,
        hometown: profileOwner.hometown,
        currentCity: profileOwner.currentCity,
        relationship: profileOwner.relationship,
        school: profileOwner.school,
        employer: profileOwner.employer,
      });
    }
  }


  render() {
    return(
      <div className="user-info">
        <div className="info-wrapper">
          <div className="info-header">{`About ${this.props.profileOwner.f_name}`}</div>
          <div className="info-item">
            <div className="info-title">
              <i className="fa fa-birthday-cake info-icon" aria-hidden="true"></i>
              Birthday:
            </div>
            <div>{this.state.birthday}</div>
          </div>
          <div className="info-item">
            <div className="info-title">
              <i className="fa fa-globe info-icon" aria-hidden="true"></i>
              Hometown:
            </div>
            <div>{this.state.hometown}</div>
          </div>
          <div className="info-item">
            <div className="info-title">
              <i className="fa fa-home info-icon" aria-hidden="true"></i>
              Current City:
            </div>
            <div>{this.state.currentCity}</div>
          </div>
          <div className="info-item">
            <div className="info-title">
              <i className="fa fa-heart info-icon" aria-hidden="true"></i>
              Relationship:
            </div>
            <div>{this.state.relationship}</div>
          </div>
          <div className="info-item">
            <div className="info-title">
              <i className="fa fa-graduation-cap info-icon" aria-hidden="true"></i>
              School:
            </div>
            <div>{this.state.school}</div>
          </div>
          <div className="info-item">
            <div className="info-title">
              <i className="fa fa-briefcase info-icon" aria-hidden="true"></i>
              Employer:
            </div>
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
  updateUser: (userId, formData) => dispatch(updateUser(userId, formData)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
