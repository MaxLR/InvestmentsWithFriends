import React from 'react';
import { connect } from 'react-redux';

class PostIndexItem extends React.Component {
  render() {
    let recipient;
    if (this.props.post.poster_id !== this.props.post.postee_id) {
      recipient = (
        <div>
          {this.props.post.postee_f_name} {this.props.post.postee_l_name}
        </div>
      );
    }
    return(
      <li>
        <div>
          {this.props.post.poster_f_name} {this.props.post.poster_l_name}
        </div>
        <div>{recipient}</div>
        <div>{this.props.post.body}</div>
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
