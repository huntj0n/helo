import React from 'react';
import Auth from './Components/Auth/auth';
import Nav from './Components/Nav/nav';
import Form from './Components/Form/form';
import Post from './Components/Post/post';
import Dashboard from './Components/Dashboard/dashboard';
import './reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Auth/>
      <Dashboard/>
      <Form/>
      <Post/>
    </div>
  );
}

export default App;
