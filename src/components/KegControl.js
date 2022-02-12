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
      selectedKeg: null
  };
}

handleAddNewKegToList = (newKeg) => {
  const newMainKegList = this.state.mainKegList.concat(newKeg);
  this.setState({
    mainKegList: newMainKegList});
}

handleChangingSelectedKeg = (id) => {
  const selectedKeg = this.state.mainKegList.filter(Keg => Keg.id === id)[0];
  this.setState({selectedKeg: selectedKeg});
}

handleDecrementPintAmount = (pint) => {
  const updatePintAmount = [...this.state.mainKegList];
  updatePintAmount[pint].pints = updatePintAmount[pint].pints-1;
  this.setState({
    mainKegList: updatePintAmount
  })
}

// add handleChangingSelectedKegValue


  render() {
    console.log(this.state.mainKegList);
    let visibleOnPage;

    if (this.state.selectedKeg != null) {
      visibleOnPage = <KegDetail
                        keg = {this.state.selectedKeg}
                        onDecrementPint = {this.handleDecrementPintAmount}
                      />             
    }                      
    else if (this.props.visibleContent === "home") {
      visibleOnPage = <AboutUs />
    } else if (this.props.visibleContent === "kegList") {
        visibleOnPage = <KegList 
                          kegList={this.state.mainKegList}
                          onKegSelection={this.handleChangingSelectedKeg}
                        />
    } else if (this.props.visibleContent === "newKegForm") {
        visibleOnPage = <NewKegForm 
                          onNewKegCreation={this.handleAddNewKegToList}
                        />
    }                    
    // } else {
    //     visibleOnPage = <KegDetail
    //                       keg = {this.state.selectedKeg}
    //                     />
    // }
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