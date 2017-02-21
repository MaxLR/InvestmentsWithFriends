import React from 'react';
import { connect } from 'react-redux';
import { fetchUserPosts, fetchNewsfeedPosts } from '../actions/post_actions';
import PostIndex from './post_index';

class NewsFeed extends React.Component {

  render() {
    return(
      <PostIndex action={this.props.action} />
    );
  }
}

const mapStateToProps = state => ({
});

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
