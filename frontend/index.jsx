import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { fetchComments, createComment, deleteComment }
  from './actions/comment_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore(
      { session: {currentUser: window.currentUser, errors: [] } }
    );
    ReactDOM.render(<Root store={ store }/>, root);
});
