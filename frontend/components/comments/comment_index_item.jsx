import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Router } from 'react-router';
import { deleteComment } from '../../actions/comment_actions';
import CommentIndex from './comment_index';
import LikeItem from '../like.jsx';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { optionsHidden: true, replyHidden: true };
  }

  toggleOptions(e) {
    this.setState({ optionsHidden: !this.state.optionsHidden });
  }

  showReply(e) {
    this.setState({ replyHidden: false });
  }

  handleDelete(commentId) {
    return (e) => {
      e.preventDefault();
      this.props.deleteComment(commentId);
    };
  }

  populateOptions() {
    let commentOptions;
    if (this.props.comment.userId === this.props.currentUser.id) {
      commentOptions = (
        <div className="comment-options">
          <div className="comment-options-button"
            onClick={this.toggleOptions.bind(this)}>v</div>
          <ul className="options-list"
            hidden={this.state.optionsHidden}>
            <li
              className="comment-option"
              onClick={this.handleDelete(this.props.comment.id)}>
              Delete Comment
            </li>
          </ul>
        </div>
      );
    }

    return commentOptions;
  }

  render() {
    return (
      <div className="comment-item-wrapper">
        <div className="comment-index-item">
          <Link to={`/users/${this.props.comment.userId}`} >
            <img className="comment-profile-photo"
              src={this.props.comment.userProfilePhoto} />
          </Link>
          <div className="comment-body">
            <Link className="commenter-name"
              to={`/users/${this.props.comment.userId}`}>
              {this.props.comment.userFName} {this.props.comment.userLName}
            </Link>
            <div className="comment-message">{this.props.comment.body}</div>
          </div>
          {this.populateOptions()}
        </div>
        <LikeItem likes={this.props.comment.likes}
          likeableId={this.props.comment.id}
          likeableType="Comment"/>
        {this.props.comment.commentableType === "Post" &&
          <div className="comment-replies">
            <div className="reply-button"
              onClick={this.showReply.bind(this)}>Reply</div>
            <CommentIndex
              commentIds={this.props.comment.commentIds}
              commentableType="Comment"
              commentableId={this.props.comment.id}
              level={2}
              parentId={this.props.comment.commentableId}
              replyHidden={this.state.replyHidden}/>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteComment: (commentId) => dispatch(deleteComment(commentId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndexItem);
