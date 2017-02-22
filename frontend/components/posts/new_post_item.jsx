import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';

class NewPostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
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
    this.props.createPost(post);
  }

  render() {
    return (
      <form >
        <input type="text"
          value={this.state.body}
          className="new-post-body"
          onChange={this.updateBody.bind(this)}/>
        <input type="submit"
          onClick={this.handleSubmit.bind(this)}
          value="Post" />
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
