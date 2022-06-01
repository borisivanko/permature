import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthProvider} from './contexts/AuthContext';
import './sass/style.scss';

ReactDOM.render(
  <AuthProvider>
    <App/>
  </AuthProvider>,
  document.getElementById('root')
);
