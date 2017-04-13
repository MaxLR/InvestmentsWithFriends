import React from 'react';
import { connect } from 'react-redux';
import { createLike, deleteLike } from '../actions/like_actions';

class LikeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likeId: this.currentUserLikes() };
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
      this.props.deleteLike(this.state.likeId);
    } else {
      const like = {
        like: {
          likeable_id: this.props.likeableId,
          likeable_type: this.props.likeableType,
        }
      };
      this.props.createLike(like);
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
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (likeId) => dispatch(deleteLike(likeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeItem);
