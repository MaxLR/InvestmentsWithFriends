import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Router } from 'react-router';
import CommentIndex from '../comments/comment_index';
import LikeItem from '../like.jsx';
import { fetchComments } from '../../actions/comment_actions';
import { deletePost } from '../../actions/post_actions';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { optionsHidden: true};
  }

  toggleOptions(e) {
    this.setState({ optionsHidden: !this.state.optionsHidden });
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  handleDelete(postId) {
    return (e) => {
      e.preventDefault();
      this.props.deletePost(postId);
    };
  }

  populateOptions() {
    let postOptions;
    if (this.props.post.poster_id === this.props.currentUser.id
      || this.props.post.postee_id === this.props.currentUser.id) {
      postOptions = (
        <div className="post-options">
          <div className="post-options-button"
            onClick={this.toggleOptions.bind(this)}>v</div>
          <ul className="options-list"
            hidden={this.state.optionsHidden}>
            <li
              className="post-option"
              onClick={this.handleDelete(this.props.post.id)}>
              Delete Post
            </li>
          </ul>
        </div>
      );
    }

    return postOptions;
  }

  toggleLike() {
    if (this.state.liked === true) {

    }
  }

  populateLikes() {
    return(
      <div className="likes">
        <div onClick={this.likePost}>Like</div>
      </div>
    );
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
          {this.populateOptions()}
        <div className="post-body">{this.props.post.body}</div>
        <LikeItem likes={this.props.post.likes}
          likeableId={this.props.post.id}
          likeableType="Post"/>
        <CommentIndex
          commentIds={this.props.post.commentIds}
          commentableType="Post"
          commentableId={this.props.post.id}/>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchComments: () => dispatch(fetchComments()),
  deletePost: (postId) => dispatch(deletePost(postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndexItem);

// this is a react component so that when I implement editing it will be
// possible without refactoring the entire class
