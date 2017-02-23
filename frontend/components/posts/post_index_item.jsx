import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Router } from 'react-router';
import CommentIndex from '../comments/comment_index';
import { fetchComments } from '../../actions/comment_actions';

class PostIndexItem extends React.Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    let recipient;
    if (this.props.post.poster_id !== this.props.post.postee_id) {
      recipient = (
        <div>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
           <Link
             to={`/users/${this.props.post.postee_id}`}
             className="user-link">
             {this.props.post.postee_f_name} {this.props.post.postee_l_name}
           </Link>
        </div>
      );
    }
    return(
      <li className="post-item">
          <div className="post-user-details">
            <Link to={`/users/${this.props.post.poster_id}`}>
              <img className="post-profile-photo"
                src={this.props.post.poster_profile_photo_url} />
            </Link>
            <Link
              to={`/users/${this.props.post.poster_id}`}
              className="user-link">
              {this.props.post.poster_f_name} {this.props.post.poster_l_name}
            </Link>
            <div>{recipient}</div>
          </div>
        <div className="post-body">{this.props.post.body}</div>
        <CommentIndex
          commentIds={this.props.post.commentIds}
          commentableType="Post"
          commentableId={this.props.post.id}/>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchComments: () => dispatch(fetchComments())
});

export default connect(
  null,
  mapDispatchToProps
)(PostIndexItem);

// this is a react component so that when I implement editing it will be
// possible without refactoring the entire class
