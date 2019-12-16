import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from './store';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import VideoDetail from './components/layout/VideoDetail';

setAuthToken(localStorage.token);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className='app-container'>
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/video/:id' component={VideoDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
