
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
// eslint-disable-next-line no-unused-vars
import{Route,Switch,useHistory} from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import {useState,useEffect} from 'react';


function App() {
  return (
    <div className="App">
       <Header/>
       <Nav/>
       <Home/>
       <NewPost/>
       <PostPage/>
       <About/>
       <Missing/>
       <Footer/>
      </div>
  );
}

export default App;
