import React from "react";
import NavBar from "./NavBar";
import KegControl from "./KegControl";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visibleOnKegControl: "home"
    };
    this.handleClick = this.handleClick.bind(this);  
  }

  handleClick = (value) => this.setState({ visibleOnKegControl: value});
  render() {
    return (
      <React.Fragment>
        <NavBar 
          handleClick={this.handleClick}
        />
        <KegControl 
          visibleContent={this.state.visibleOnKegControl}
        />
      </React.Fragment>
    );
  }
}

export default App;
