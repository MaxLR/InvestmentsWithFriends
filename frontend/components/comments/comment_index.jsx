import React from 'react';
import { connect } from 'react-redux';
import CommentIndexItem from './comment_index_item';
import NewCommentItem from './new_comment_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { replyHidden: true };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.replyHidden !== this.props.replyHidden) {
      this.showReply();
    }
  }

  showReply() {
    this.setState({ replyHidden: false });
  }

  mapCommentsToCommentItems(comments) {
    let commentItems = comments.map(comment => {
      return <CommentIndexItem key={comment.id} comment={comment} />;
    });

    return commentItems;
  }

  render() {
    const renderNewCommentForm = (this.props.commentableType === "Post") ||
      (this.props.commentableType === "Comment" && this.state.replyHidden === false);
    return (
      <div className="comment-index-container">
        <ul className="comment-index">
          {this.mapCommentsToCommentItems(this.props.comments)}
        </ul>
        {renderNewCommentForm &&
          <NewCommentItem commentableType={this.props.commentableType}
            commentableId={this.props.commentableId} level={this.props.level || 1}
            parentId={this.props.parentId}/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  comments: Object.keys(state.comments).map(id => state.comments[id])
    .filter(comment => ownProps.commentIds.includes(comment.id))
});

export default connect(
  mapStateToProps,
  null
)(CommentIndex);
