import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Router } from 'react-router';

class LeftSidebar extends React.Component {
  render() {
    return(
      <div className="left-sidebar-wrapper">
        <div className="left-sidebar">
          <div className="left-nav-section">
            <Link className="left-nav-link"
              to={`/users/${this.props.currentUser.id}`}>
              {this.props.currentUser.f_name} {this.props.currentUser.l_name}
            </Link>
            <Link className="left-nav-link" to="/">News Feed</Link>
          </div>
          <div className="left-nav-section">
            <div className="left-nav-header">Projects</div>
            <a href="http://www.maxrauchman.com" target="_blank">
              Portfolio
            </a>
            <a href="http://www.maxrauchman.com/aDOMinableSnowman"
              target="_blank">
              aDOMinable Snowman
            </a>
          </div>
          <div className="left-nav-section">
            <div className="left-nav-header">Games</div>
            <a href="http://www.maxrauchman.com/nyanJump" target="_blank">
              Nyan Jump
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps,
  null
)(withRouter(LeftSidebar));
