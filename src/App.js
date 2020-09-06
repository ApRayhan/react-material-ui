import React from 'react';
import './App.css';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";
import NotFound from './NotFound/NotFound';
import PostDetail from './PostDetail/PostDetail';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/post/:postId">
            <PostDetail></PostDetail>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
