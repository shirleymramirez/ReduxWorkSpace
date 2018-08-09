import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <BrowserRouter >
    <div>
      <Switch>
        {/* we use Route Component here to show the Post's new component */}
        {/* whenever react router renders a component it passes in a whole new bunch of */}
        {/* different helpers and objects for helping with navigation to this component */}  
        <Route path="/posts/new" component={PostsNew} />  
        <Route path="/posts/:id" component={PostsShow} />
        <Route path="/" component={PostsIndex} />
      </Switch>
    </div>
   </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
