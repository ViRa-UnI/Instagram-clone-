import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import { PostProvider } from './context/postContext';
import { CommentProvider } from './context/commentContext';
import { UserProvider } from './context/userContext';
import App from './App';
import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <PostProvider>
          <CommentProvider>
            <UserProvider>
              <App />
            </UserProvider>
          </CommentProvider>
        </PostProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);