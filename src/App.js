import React from 'react';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import Main from './views/Main';
import PermatureInput from './views/PermatureInput';
import Login from './views/Login';
import Signup from './views/Signup';
import Error from './views/Error';
import AuthRouteGuard from "./components/AuthRouteGuard";

const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <AuthRouteGuard route='/login'>
              <Main/>
            </AuthRouteGuard>
          </Route>

          <Route path='/new-permature'>
            <AuthRouteGuard route='/login'>
              <PermatureInput/>
            </AuthRouteGuard>
          </Route>

          <Route path='/login'>
            <AuthRouteGuard route='/' invert={true}>
              <Login/>
            </AuthRouteGuard>
          </Route>

          <Route path='/signup'>
            <AuthRouteGuard route='/' invert={true}>
              <Signup/>
            </AuthRouteGuard>
          </Route>

          <Route path='*'>
            <AuthRouteGuard route='/login'>
              <Error/>
            </AuthRouteGuard>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
