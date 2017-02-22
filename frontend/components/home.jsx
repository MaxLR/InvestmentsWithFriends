import React from 'react';
import SessionForm from './session/session_form';
import { connect } from 'react-redux';
import { signout } from '../actions/session_actions';
import NewsFeed from './news_feed';

class Home extends React.Component {
  render() {
    if (this.props.currentUser) {
      return(
        <div className="news-feed home-feed">
          <NewsFeed />
        </div>
      );
    } else {
      return(
        <div>
          <SessionForm />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

//inside render, if logged_in & ownProps.location.pathname === '/' render
//navbar & news feed otherwise; navbar & children
