import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/user_actions';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: "" }; //for future implementation of posts
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.id);
  }

  render() {
    if (!this.props.profileOwner) {
      return (
        <h2>Loading</h2>
      );
    } else {
      return (
        <p>{this.props.profileOwner.f_name}</p>
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
