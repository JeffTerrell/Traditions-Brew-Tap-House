import React from "react";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function KegDetail(props) {
  const {keg} = props;

  let pintAmount;
  if(keg.pints < 1) {
    pintAmount = "Keg is empty"  
  } else {
    pintAmount = <Button variant="danger" onClick={()=>props.onDecrementPint(keg.id)}>Drink A Pint</Button>;
  }
  return(
    <React.Fragment>
      <div id="keg-detail">
        <h3>Keg Detail</h3>
        <h6>Name: {keg.name}</h6>
        <h6>Brewery: {keg.brewery}</h6>
        <h6>Type: {keg.type}</h6>
        <h6>ABV: {keg.abv}%</h6>
        <h6>Price: ${keg.price}</h6>
        <h6>Pints: {keg.pints}</h6>
        {pintAmount}
      </div>   
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onDecrementPint: PropTypes.func,
  onClickExitKegDetail: PropTypes.func
};

export default KegDetail;
