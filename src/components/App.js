import Container from 'react-bootstrap/Container';
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
        <Container fluid>
          <NavBar 
            handleClick={this.handleClick}
          />
          <KegControl 
            visibleContent={this.state.visibleOnKegControl}
            handleClick={this.handleClick}
          />
        </Container>  
      </React.Fragment>
    );
  }
}

export default App;
