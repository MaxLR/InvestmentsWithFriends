import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import { signup, signin, signout } from './actions/session_actions';
// import {isFriend, isPendingFriend} from './util/util';
// import { fetchUserPosts, fetchNewsfeedPosts, createPost, deletePost }
//   from './actions/post_actions';
import { fetchCommentableComments, createComment, deleteComment }
  from './util/comment_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore(
      { session: {currentUser: window.currentUser, errors: [] } }
    );
    window.store = store;
    ReactDOM.render(<Root store={ store }/>, root);
});

// window.signup = signup;
// window.signin = signin;
// window.signout = signout;
//
// window.isFriend = isFriend;
// window.isPendingFriend = isPendingFriend;
//
// window.fetchUserPosts = fetchUserPosts;
// window.fetchNewsfeedPosts = fetchNewsfeedPosts;
// window.createPost = createPost;
// window.deletePost = deletePost;

window.fetchCommentableComments = fetchCommentableComments;
window.createComment = createComment;
window.deleteComment = deleteComment;
