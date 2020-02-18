import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Header from "./components/Header";
import Post from "./components/Post";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <Header/>
    <div className="container">
    <Post/>
    </div>
    </div>
  );
}

export default App;
