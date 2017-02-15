import React from 'react';
import { connect } from 'react-redux';
import Home from './home';

const App = ({ children }) => {
  return(
    <div>
      <Home />
    </div>
  );
};

export default App;
