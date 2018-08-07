import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

// tihis function will receive the previous state and action
// default our state in an object in our initial call
export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_POSTS:
            console.log("actionpayloads", action.payload.data);
            // we used lodash library to take an array of record and create an object out of that
            return _.mapKeys(action.payload.data, 'id'); // mapKeys - we provide first argument which is the array to process,
            // property that we want to pull of each object.
            // will produce an object where the key is the id of the post, and then the object itself is the entire post 
        default:
        return state;
    }
}

// purpose of this reducer is to return an object that contains the id of every post as the key 
// and then the value will be the actual post itself.