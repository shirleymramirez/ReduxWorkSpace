import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

// tihis function will receive the previous state and action
// default our state in an object in our initial call
export default function(state = {}, action) {
    switch(action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);
        case FETCH_POST:
            // take all the existing posts that we have, take them all out in the state object
            // and put them into this new object that we are about to return
            // and then on top of that we're going to add a  new key value pair where the key
            // will be the idea of the post that we fetched and the value will be the actual post itself
            
            // ES5
            // const post = action.payload.data;
            // const newstate = { ...state }; 
            // newState[post.id] = post;
            // return newState;

            // same, doing exact things as the above code
            return { ...state, [action.payload.data.id] : action.payload.data} 

        case FETCH_POSTS:
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