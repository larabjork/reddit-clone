import React from "react";
import App from "../App.css";
import Search from "./images/search.png";
import { Link } from 'react-router-dom';


function Header(){

  let banner = {
    backgroundColor: "#0079D3",
    height: "60px",
    color: 'white',
  }

  let searchBar = {
    color: 'grey',
    border: "1px solid white",
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '8px',
    border: '1px solid black',
    width: '40%',
    marginLeft: "20px",
    marginBottom: "10px",
    marginTop: "10px"
  }

  let logo = {
    width: '2%',
  }

  let menu = {
    paddingTop: "20px",
    padding: '20px',
    border: '1px',
    color: "white"
  }

  let searchIcon = {
    width: '5%',
    paddingRight: '10px',
  }

  return (
    <div>
    <div style={searchBar}>
    <img src={Search} alt='search' style={searchIcon}/>
    <span> Search by team, artist, event, or venue </span>
    </div>
    <div style={banner}>
    <Link to="/" style={menu}>Home</Link>
    <Link to="/newpost" style={menu}>Post</Link>
    <a href="#" style={menu}> Log In </a>
    <a href="#" style={menu}><span> Sign Up</span> </a>
    </div>
    </div>
  );
}

export default Header;
