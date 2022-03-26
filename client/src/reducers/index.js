import { combineReducers } from 'redux';

import posts from './posts';
import sets from './sets';

export default combineReducers({
    sets,
    posts,
});
