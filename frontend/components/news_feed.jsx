import React from 'react';
import { connect } from 'react-redux';
import { fetchUserPosts, fetchNewsfeedPosts } from '../actions/post_actions';
import PostIndex from './posts/post_index';
import NewPostItem from './posts/new_post_item';
import { isEqual } from 'lodash';

class NewsFeed extends React.Component {
  componentWillReceiveProps(newProps) {
    if (isEqual(newProps.friends, this.props.friends)) {
      this.props.action(this.props.recipientId);
    }
  }

  render() {
    return(
      <div>
        <NewPostItem recipientId={this.props.recipientId} />
        <PostIndex action={this.props.action} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let recipientId;
  if (ownProps.feedType === "user") {
    recipientId = ownProps.profileOwnerId;
  } else {
    recipientId = state.session.currentUser.id;
  }

  return({
    recipientId: recipientId,
    friends: state.session.currentUser.friends
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  if (ownProps.feedType === "user") {
    action = (userId) => dispatch(fetchUserPosts(userId));
  } else {
    action = () => dispatch(fetchNewsfeedPosts());
  }
  return {
    action: action
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);
