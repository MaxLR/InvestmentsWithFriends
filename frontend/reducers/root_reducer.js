import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import FriendshipReducer from './friendship_reducer';
import PostReducer from './post_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  friends: FriendshipReducer,
  posts: PostReducer
});

export default rootReducer;
