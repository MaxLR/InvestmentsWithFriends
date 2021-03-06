import React from 'react';
import { connect } from 'react-redux';
import { createComment, addNestedComment } from '../../actions/comment_actions';
import { addComment } from '../../actions/post_actions';

class NewCommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
  }

  updateBody(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = {
      comment: {
        commentable_id: this.props.commentableId,
        commentable_type: this.props.commentableType,
        body: this.state.body,
      }
    };
    const parentId = this.props.parentId;
    this.props.createComment(comment)
      .then((newComment) => {
        if (newComment.comment.commentableType === "Comment") {
          this.props.addNestedComment(newComment);
        } else {
          this.props.addComment(newComment);
        }
      }).then(this.setState({body: ""}));
  }

  render() {
    return(
      <form className="new-comment" onSubmit={this.handleSubmit.bind(this)}>
        <img className="new-comment-profile-photo"
          src={this.props.currentUser.profile_photo_url} />
        <div className="new-comment-form">
          <input type="text"
            value={this.state.body}
            className="new-comment-body"
            placeholder="Write a comment..."
            onChange={this.updateBody.bind(this)} />
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment)),
  addComment: (comment) => dispatch(addComment(comment)),
  addNestedComment: (comment) => dispatch(addNestedComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCommentItem);
