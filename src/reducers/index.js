import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

// reducer will produce the post piece of state

const rootReducer = combineReducers({
  posts: PostsReducer  
});

export default rootReducer;
