import React from 'react';
import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentWillMount() {
    this.props.action(this.props.profileOwner.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.profileOwner.id !== newProps.profileOwner.id) {
      this.props.action(newProps.profileOwner.id);
    }
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
  posts: Object.keys(state.posts.posts).map((key) => state.posts.posts[key])
    .sort(function(a, b) {return (a.id > b.id) ? -1 : ((b.id > a.id) ? 1 : 0);} )
});

export default connect(
  mapStateToProps,
  null
)(PostIndex);
