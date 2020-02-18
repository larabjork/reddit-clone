import React from "react";
import App from "../App.css";
import Search from "./images/search.png";


function NavBar(){

  let banner = {
    backgroundColor: "#0079D3",
    height: "60px",
    color: 'white',
  }

  let slogan = {
    paddingTop: "100px",
    textAlign: "center",
    fontSize: "50px",
    paddingBottom: '25px',
    color: "black"
  }

  let searchBar = {
    color: 'grey',
    border: "1px solid white",
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '10px',
    boxShadow: 'rgba(15, 15, 15, 0.12) 0px 16px 24px 0px',
    width: '40%',
    marginLeft: "20px"
  }

  let logo = {
    width: '2%',
  }

  let rightMenu = {
    float: 'right',
    padding: '20px',
    border: '1px',
    color: "white"
  }

  let searchIcon = {
    width: '3%',
    paddingRight: '10px',
  }

  let signUp = {
    border: '1px',
    backgroundColor: 'rgba(15,15,15,.1)',
    borderRadius: '.5em',
    padding: '10px'
  }




  return (
    <div>
    <div style={searchBar}>
    <img src={Search} alt='search' style={searchIcon}/>
    <span> Search by team, artist, event, or venue </span>
    </div>
    <div style={banner}>
    <div class="container">
    <a href="#" style={rightMenu}> Log In </a>
    <a href="#" style={rightMenu}><span style={signUp}> Sign Up</span> </a>
    <h1 style={slogan}>Cook Something New</h1>
    </div>
    </div>
    </div>
  );
}

export default NavBar;
