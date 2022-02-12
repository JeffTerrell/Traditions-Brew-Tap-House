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
  const test = this.props.handleClick;
  test("detail");
  this.setState({selectedKeg: selectedKeg});
}

handleDecrementPintAmount = (id) => {
  const updatePintAmount = this.state.mainKegList.filter(Keg => Keg.id === id)[0];
  updatePintAmount.pints = updatePintAmount.pints-1;
  this.setState({
    mainKegKist: updatePintAmount,
  })
}

  render() {
    console.log(this.state.mainKegList);
    let visibleOnPage;
    if (this.props.visibleContent === "detail") {
      visibleOnPage = <KegDetail
                        keg = {this.state.selectedKeg}
                        onDecrementPint = {this.handleDecrementPintAmount}
                        onClickExitKegDetail = {this.handleClickExitKegDetail}                      
                      />             
    }                      
      else if (this.props.visibleContent === "home") {
      visibleOnPage = <AboutUs />
    } else if (this.props.visibleContent === "kegList") {
        visibleOnPage = <KegList 
                          kegList={this.state.mainKegList}
                          onKegSelection={this.handleChangingSelectedKeg}
                        />
    } else {
        visibleOnPage = <NewKegForm 
                          onNewKegCreation={this.handleAddNewKegToList}
                        />
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