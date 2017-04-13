import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import FriendshipReducer from './friendship_reducer';
import PostReducer from './post_reducer';
import CommentReducer from './comment_reducer';
import LikeReducer from './like_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  posts: PostReducer,
  comments: CommentReducer,
  likes: LikeReducer
});

export default rootReducer;
