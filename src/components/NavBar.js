import React from "react";
import woodKeg from "./../img/woodKeg.jpg";

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    const test = this.props.handleClick;

    return (
      <React.Fragment>
        <div id="navbar">
          <h1>Traditions Brew Tap House</h1>
          <img src={woodKeg} alt="wood keg"/>
          <button onClick={()=> test("home")}>Home</button>  
          <button onClick={()=> test("kegList")}>Keg List</button>  
          <button onClick={()=> test("newKegForm")}>Add Keg</button>
        </div>
      </React.Fragment>
    );
  } 
}

export default NavBar;