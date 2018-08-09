import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=DOLLHOUSE1234';

//purpose of this action creator is to fetch a list of post
//and it will return an object and it has to have a type.
export function fetchPosts() {
    // making axios request get() and assigned it to variable const request
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return{
        type: FETCH_POSTS,
        payload: request //this var request is assigned to payload property action that we are returning
    };
    //redux promise middleware will made use of the payload property and will automatically 
    //resolve that request whenever it sees this action come across
    //so by the time this action arrives at the reducer, payload will contain the response object
    // from axios which will have the big array of posts.
}

export function createPost(values, callback) {
    // first argument is the URL, and the second argument is the object or data that we want to send in the remote API
    // make the API request -> axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    // then after successfully completed calls the callback for a promise
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}