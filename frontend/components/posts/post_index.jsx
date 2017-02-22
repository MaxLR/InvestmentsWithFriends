import React from 'react';
import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentWillMount() {
    this.props.action(this.props.profileOwner.id);
  }
  mapPostsToPostItems(posts) {
    let postItems = posts.map(post => {
      return <PostIndexItem key={post.id} post={post} />;
    });
    return postItems;
  }

  render() {
    return (
      <ul>
        {this.mapPostsToPostItems(this.props.posts)}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  profileOwner: state.user.profileOwner,
  posts: state.posts.posts
});

export default connect(
  mapStateToProps,
  null
)(PostIndex);
