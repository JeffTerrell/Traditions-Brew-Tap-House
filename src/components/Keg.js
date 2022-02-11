import React from "react";
import PropTypes from 'prop-types';

function Keg(props) {
  return(
    <React.Fragment>
      <div id="keg">
        <h3>Keg</h3>
        <h6>Name: {props.name}</h6>
        <h6>Brewery: {props.brewery}</h6>
        <h6>Type: {props.type}</h6>
        <h6>ABV: {props.abv}</h6>
        <h6>Price: {props.price}</h6>
        <hr />
      </div>  
    </React.Fragment>
  );
}

Keg.propTypes = {
  name : PropTypes.string,
  brewery: PropTypes.string,
  type: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number,
};

export default Keg;