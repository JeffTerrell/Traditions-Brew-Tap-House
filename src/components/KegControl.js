import React from 'react';
import AboutUs from './AboutUs';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
  };
}


  render() {
    console.log(this.props.visibleOnPage);
    let visibleOnPage;
    if (this.props.visibleContent === "home") {
      visibleOnPage = <AboutUs />
    } else if (this.props.visibleContent === "kegList") {
        visibleOnPage = <KegList />
    } else if (this.props.visibleContent === "newKegForm") {
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