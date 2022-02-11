import React from "react";
import woodKeg from "./../img/woodKeg.jpg";

function NavBar(props){

  const test = props.handleClick;

  return (
    <React.Fragment>
      <div id="navbar">
        <h1>Traditions Brew Tap House</h1>
        <img src={woodKeg} alt="wood keg"/>
        <button onClick={()=> test("home")}>Home</button>  
        <button onClick={()=> test("KegList")}>Keg List</button>  
        <button onClick={()=> test("NewKegForm")}>Add Keg</button>
      </div>
    </React.Fragment>
  );
}

export default NavBar;