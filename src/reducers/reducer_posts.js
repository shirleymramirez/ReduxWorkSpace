import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

// tihis function will receive the previous state and action
// default our state in an object in our initial call
export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
        return state;
    }
}

// purpose of this reducer is to return an object that contains the id of every post as the key 
// and then the value will be the actual post itself.