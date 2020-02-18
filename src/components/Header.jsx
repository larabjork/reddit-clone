import React from "react";
import App from "../App.css";
import Search from "./images/search.png";
import { Link } from 'react-router-dom';


function Header(){

  let searchBar = {
    border: "solid lightskyblue",
    padding: "5px 150px 5px 10px",
    borderRadius: "30px",
    float: "right",
    margin: "0px 50px 0px 0px",
    color: "grey"
  }

  let logo = {
    width: '2%',
  }

  let menu = {
    border: "solid lightgrey",
    borderWidth: "1px",
    padding: "10px 20px",
    color: "grey",
    float: "right",
    marginBottom: "30px"
  }

  return (
    <div>
    <div>
      <Link to="/newpost"style={menu}>Post</Link>
      <Link to="/" style={menu}>Home</Link>
      <span style={searchBar}>Search</span>
    </div>
    </div>
  );
}

export default Header;
