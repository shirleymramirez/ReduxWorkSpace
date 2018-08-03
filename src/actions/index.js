import axios from 'axios';


export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/app';

export function fetchPost() {
    const request = axios.get(`${ROOT_URL}/posts`);

    return{
        type: FETCH_POSTS
    };
}