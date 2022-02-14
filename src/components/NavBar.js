import React from "react";
import woodKeg from "./../img/woodKeg.jpg";
import Button from 'react-bootstrap/Button';

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
          <Button variant="danger" onClick={()=> changeView("home")}>Home</Button>  
          <Button variant="danger" onClick={()=> changeView("kegList")}>Keg List</Button>  
          <Button variant="danger" onClick={()=> changeView("newKegForm")}>Add Keg</Button>
        </div>
      </React.Fragment>
    );
  } 
}

export default NavBar;