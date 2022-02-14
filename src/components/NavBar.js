import React from "react";
import kegs_bg from "./../img/kegs_bg.png";
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
          <img src={kegs_bg} alt="wood kegs"/>
          <Button variant="danger" onClick={()=> changeView("home")}>Home</Button>  
          <Button variant="danger" onClick={()=> changeView("kegList")}>Keg List</Button>  
          <Button variant="danger" onClick={()=> changeView("newKegForm")}>Add Keg</Button>
        </div>
      </React.Fragment>
    );
  } 
}

export default NavBar;