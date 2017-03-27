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
      debugger
      this.setState({ replyHidden: newProps.replyHidden});
    }
  }

  mapCommentsToCommentItems(comments) {
    let commentItems = comments.map(comment => {
      return <CommentIndexItem key={comment.id} comment={comment} />;
    });

    return commentItems;
  }

  render() {
    return (
      <div className="comment-index-container">
        <ul className="comment-index">
          {this.mapCommentsToCommentItems(this.props.comments)}
        </ul>
        {(this.props.commentableType === "Comment" && this.state.replyHidden === false)
          || this.props.commentableType === "Post" &&
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
