import React from 'react';
import { connect } from 'react-redux';
import { createLike, deleteLike } from '../actions/like_actions';

class LikeItem extends React.Component {
  constructor(props) {
    super(props);
  }

  currentUserLikes() {
    const currentUserId = this.props.currentUser.id;
    this.props.post.likes.forEach(like => {
      if (like.user_id === currentUserId) {
        return like.id;
      }
    });

    return null;
  }

  render() {
    return (
      <div>
        <div></div>
        <div>{this.props.likes.length > 0 ? `${this.props.likes.length}` : ""}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (likeId) => dispatch(deleteLike(likeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeItem);
