import React from 'react';
import { connect } from 'react-redux';
import { createLike, deleteLike } from '../actions/like_actions';

class LikeItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div></div>
        <div>{this.props.likes.length > 0 ? `${this.props.likes.length}` : ""}</div>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(LikeItem);
