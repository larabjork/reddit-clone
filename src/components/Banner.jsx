import React from "react";
import App from "../App.css";
import { Link } from 'react-router-dom';


function Banner(){

  let banner = {
    backgroundColor: "#0079D3",
    height: "60px",
    color: 'white',
    marginTop: "50px"
  }
  return (
    <div>
      <div style={banner}>
      </div>
    </div>
  );
}

export default Banner;
