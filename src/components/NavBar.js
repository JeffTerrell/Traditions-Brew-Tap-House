import React from "react";
import woodKeg from "./../img/woodKeg.jpg";

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    const changeView = this.props.handleClick;

    return (
      <React.Fragment>
        <div id="navbar">
          <h1>Traditions Brew Tap House</h1>
          <img src={woodKeg} alt="wood keg"/>
          <button onClick={()=> changeView("home")}>Home</button>  
          <button onClick={()=> changeView("kegList")}>Keg List</button>  
          <button onClick={()=> changeView("newKegForm")}>Add Keg</button>
        </div>
      </React.Fragment>
    );
  } 
}

export default NavBar;