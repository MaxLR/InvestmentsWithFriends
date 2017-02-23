import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';

class NewPostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
  }

  componentDidReceiveProps() {
    this.render();
  }

  updateBody(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = {
      post: {
        poster_id: this.props.currentUser.id,
        postee_id: this.props.recipientId,
        body: this.state.body
      }
    };
    this.props.createPost(post).then(this.setState({ body: "" }));
  }

  render() {
    const placeholder =
    (this.props.currentUser.id === this.props.recipientId) ?
    "What's on your mind?" : "Write something...";

    return (
      <form className="new-post">
        <img className="post-profile-photo"
          src={this.props.currentUser.profile_photo_url} />
        <div className="new-post-form">
          <textarea
            value={this.state.body}
            className="new-post-body"
            placeholder={placeholder}
            onChange={this.updateBody.bind(this)}/>
          <input type="submit"
            className="new-post-button"
            onClick={this.handleSubmit.bind(this)}
            value="Post" />
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPostItem);
