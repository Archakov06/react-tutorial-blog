import { combineReducers } from 'redux';

import posts from 'modules/PostsList/reducer';

export default combineReducers({
  posts,
});
