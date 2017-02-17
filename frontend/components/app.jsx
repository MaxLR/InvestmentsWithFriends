import React from 'react';
import { connect } from 'react-redux';
// import Home from './home';
import NavBar from './nav_bar';

class App extends React.Component {
  render() {
    if (this.props.currentUser) {
      return(
        <div>
          <NavBar />
          { this.props.children }
        </div>
      );
    } else {
      return(
        <div>
          { this.props.children }
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


export default connect(
  mapStateToProps,
  null
)(App);
