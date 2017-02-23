import React from 'react';
import { connect } from 'react-redux';
import CommentIndexItem from './comment_index_item';
import NewCommentItem from './new_comment_item';

class CommentIndex extends React.Component {
  mapCommentsToCommentItems(comments) {
    let commentItems = comments.map(comment => {
      return <CommentIndexItem key={comment.id} comment={comment} />;
    });

    return commentItems;
  }

  render() {
    return (
      <div>
        <ul className="comment-index">
          {this.mapCommentsToCommentItems(this.props.comments)}
        </ul>
        <NewCommentItem commentableType={this.props.commentableType}
          commentableId={this.props.commentableId} />
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
