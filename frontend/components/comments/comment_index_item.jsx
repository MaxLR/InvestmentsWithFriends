import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Router } from 'react-router';

class CommentIndexItem extends React.Component {
  render() {
    return (
      <div>
      <div className="commenter-info">
        <Link to={`/users/${this.props.comment.userId}`} >
          <img className="comment-profile-photo"
            src={this.props.comment.userProfilePhoto} />
        </Link>
        <Link className="commenter-name"
          to={`/users/${this.props.comment.userId}`}>
          {this.props.comment.userFName} {this.props.comment.userLName}
        </Link>
      </div>
      <div>{this.props.comment.body}</div>
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
