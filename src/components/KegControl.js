import React from 'react';
import AboutUs from './AboutUs';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainKegList: [],
      currentView: this.props.visibleContent
  };
}

handleAddNewKegToList = (newKeg) => {
  const newMainKegList = this.state.mainKegList.concat(newKeg);
  this.setState({
    mainKegList: newMainKegList, 
    currentView: "home"});
}


  render() {
    console.log(this.state.mainKegList);
    let visibleOnPage;
    if (this.props.visibleContent === "home") {
      visibleOnPage = <AboutUs />
    } else if (this.props.visibleContent === "kegList") {
        visibleOnPage = <KegList 
                          kegList={this.state.mainKegList}
                        />
    } else if (this.props.visibleContent === "newKegForm") {
        visibleOnPage = <NewKegForm 
                          onNewKegCreation={this.handleAddNewKegToList}
                        />
    } else {
        visibleOnPage = <KegDetail />
    }
    console.log(visibleOnPage);
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