import React from 'react';
/* import { Route, IndexRoute } from 'react-router'; */
import App from './components/App';
import LoginComponent from './components/loginComponent';
import SearchComponent from './components/searchComponent';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginComponent} />
    <Route path="/login" component={LoginComponent} />
    <Route path="/search" component={SearchComponent} />
  </Route>
);