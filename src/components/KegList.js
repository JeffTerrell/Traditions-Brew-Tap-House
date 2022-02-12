import React from "react";
import Keg from "./Keg";
import PropTypes from 'prop-types';

function KegList(props) {
  return(
    <React.Fragment>
      <div id="keg-list">
        <h3>Keg List</h3>
        {props.kegList.map((keg, index) =>
        <Keg
          whenKegClicked={props.onKegSelection}
          name={keg.name}
          brewery={keg.brewery}
          type={keg.type}
          abv={keg.abv}
          price={keg.price}
          id={keg.id}
          key={index}
        />
        )}
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  KegList: PropTypes.array,
  KegList: PropTypes.func
};

export default KegList;