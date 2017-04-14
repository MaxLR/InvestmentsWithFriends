import React from 'react';
import { connect } from 'react-redux';
import { createPostLike, deleteLike } from '../actions/like_actions';
import { isEqual } from 'lodash';

class LikeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likeId: this.currentUserLikes(), likes: this.props.likes };
  }

  componentWillReceiveProps(newProps) {
    if (!isEqual(newProps.likes, this.props.likes)) {
      let likeId;
      let currentUserId = this.props.currentUser.id;
      newProps.likes.forEach(like => {
        if (like.userId === currentUserId) {
          likeId = like.id;
        }
      });
      this.setState({ likes: newProps.likes, likeId: likeId });
    }
  }

  currentUserLikes() {
    const currentUserId = this.props.currentUser.id;
    let likeId = null;
    this.props.likes.forEach(like => {
      if (like.user_id === currentUserId) {
        likeId = like.id;
      }
    });

    return likeId;
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.likeId) {
      this.props.deleteLike(this.state.likeId).then(this.setState({ likeId: null }));
    } else {
      const like = {
        like: {
          likeable_id: this.props.likeableId,
          likeable_type: this.props.likeableType,
        }
      };
      this.props.createPostLike(like);
    }
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        <div>words</div>
        <div>{this.props.likes.length > 0 ? `${this.props.likes.length}` : ""}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createPostLike: (like) => dispatch(createPostLike(like)),
  deleteLike: (likeId) => dispatch(deleteLike(likeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeItem);
