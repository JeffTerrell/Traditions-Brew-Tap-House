import React from 'react';
import Home from './Home';
import NewKegForm from './NewOrderForm';
import KegList from './OrderList';
import KegDetail from './OrderDetail';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleOnKegControl: "home"  
  };
}


  render() {
    let visibleOnPage;
    if (visibleOnKegControl === "home") {
      visibleOnPage = <Home />
    } else if (visibleOnKegControl === "kegList") {
        visibleOnPage = <KegList />
    } else if (visibleOnKegControl === "newKegForm") {
        visibleOnPage = <NewKegForm />
    } else {
        visibleOnPage = <KegDetail />
    }
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