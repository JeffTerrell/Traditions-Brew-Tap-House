import React from "react";
import woodKeg from "./../img/woodKeg.jpg";

function NavBar(){
  return (
    <React.Fragment>
      <div id="navbar">
        <h1>Traditions Brew Tap House</h1>
        <img src={woodKeg} alt="wood keg"/>
      </div>
    </React.Fragment>
  );
}

export default NavBar;