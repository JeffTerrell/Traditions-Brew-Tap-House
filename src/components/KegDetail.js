import React from "react";
import PropTypes from 'prop-types';

function KegDetail(props) {
  const {keg} = props;
  return(
    <React.Fragment>
      <div id="keg-detail">
        <h3>Keg Detail</h3>
        <h6>Name: {keg.name}</h6>
        <h6>Brewery: {keg.brewery}</h6>
        <h6>Type: {keg.type}</h6>
        <h6>ABV: {keg.abv}</h6>
        <h6>Price: {keg.price}</h6>
        <button>Pint Sold</button>
      </div>   
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;