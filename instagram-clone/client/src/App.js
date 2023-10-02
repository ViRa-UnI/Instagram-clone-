import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CreatePost from './components/CreatePost';
import Post from './components/Post';
import Comment from './components/Comment';
import UserProfile from './components/UserProfile';
import Followers from './components/Followers';
import Following from './components/Following';
import Explore from './components/Explore';
import { AuthProvider } from './context/authContext';
import { PostProvider } from './context/postContext';
import { CommentProvider } from './context/commentContext';
import { UserProvider } from './context/userContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <PostProvider>
          <CommentProvider>
            <UserProvider>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/createpost" component={CreatePost} />
                <Route path="/post/:postId" component={Post} />
                <Route path="/comment/:commentId" component={Comment} />
                <Route path="/user/:userId" component={UserProfile} />
                <Route path="/followers/:userId" component={Followers} />
                <Route path="/following/:userId" component={Following} />
                <Route path="/explore" component={Explore} />
              </Switch>
            </UserProvider>
          </CommentProvider>
        </PostProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;