import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Router } from 'react-router';

class CommentIndexItem extends React.Component {
  render() {
    return (
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
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

};

export default connect(
  null,
  null
)(CommentIndexItem);
