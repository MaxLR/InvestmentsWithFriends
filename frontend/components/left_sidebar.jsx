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
              <img className="left-sidebar-picture"
                src={this.props.currentUser.profile_photo_url}/>
              <div className="self-link-fname">{this.props.currentUser.f_name}</div>
              <div>{this.props.currentUser.l_name}</div>
            </Link>
            <Link className="left-nav-link" to="/">
              <i className="fa fa-newspaper-o left-sidebar-icon" aria-hidden="true"></i> News Feed
            </Link>
          </div>
          <div className="left-nav-section">
            <div className="left-nav-header">Projects</div>
            <a href="http://www.maxrauchman.com" target="_blank">
              <i className="fa fa-user left-sidebar-icon" aria-hidden="true"></i> Portfolio
            </a>
            <a href="http://www.maxrauchman.com/aDOMinableSnowman"
              target="_blank">
              <i className="fa fa-snowflake-o left-sidebar-icon" aria-hidden="true"></i> aDOMinable Snowman
            </a>
          </div>
          <div className="left-nav-section">
            <div className="left-nav-header">Games</div>
            <a href="http://www.maxrauchman.com/nyanJump" target="_blank">
              <i className="fa fa-gamepad left-sidebar-icon" aria-hidden="true"></i> Nyan Jump
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
