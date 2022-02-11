import React from "react";
import PropTypes from 'prop-types';

function KegDetail(props) {
  return(
    <React.Fragment>
      <div id="keg-detail">
        <h3>Keg Detail</h3>
        <h6>Name: {props.name}</h6>
        <h6>Brewery: {props.brewery}</h6>
        <h6>Type: {props.type}</h6>
        <h6>ABV: {props.abv}</h6>
        <h6>Price: {props.price}</h6>
      </div>   
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  KegDetail: PropTypes.object
};

export default KegDetail;