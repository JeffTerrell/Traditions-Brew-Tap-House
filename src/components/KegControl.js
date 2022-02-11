import React from 'react';
import AboutUs from './AboutUs';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleOnKegControl: "home" 
  };
}


  render() {
    console.log(this.state.visibleOnKegControl);
    let visibleOnPage;
    if (this.state.visibleOnKegControl === "home") {
      visibleOnPage = <AboutUs />
    } else if (this.state.visibleOnKegControl === "kegList") {
        visibleOnPage = <KegList />
    } else if (this.state.visibleOnKegControl === "newKegForm") {
        visibleOnPage = <NewKegForm />
    } else {
        visibleOnPage = <KegDetail />
    }
    // console.log(visibleOnPage);
    // console.log(this.visibleOnKegControl);
    return ( 
      <React.Fragment>
        <div id="keg-control">
          {visibleOnPage}
        </div>
      </React.Fragment>
    );
  }
}

export default KegControl;