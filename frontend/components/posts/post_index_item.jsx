import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Router } from 'react-router';

class PostIndexItem extends React.Component {
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
            <img className="post-profile-photo"
              src={this.props.post.poster_profile_photo_url} />
            <Link
              to={`/users/${this.props.post.poster_id}`}
              className="user-link">
              {this.props.post.poster_f_name} {this.props.post.poster_l_name}
            </Link>
            <div>{recipient}</div>
          </div>
        <div className="post-body">{this.props.post.body}</div>
      </li>
    );
  }
}

export default connect(
  null,
  null
)(PostIndexItem);

// this is a react component so that when I implement editing it will be
// possible without refactoring the entire class
