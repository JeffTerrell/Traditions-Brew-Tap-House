import React from "react";
import Keg from "./Keg";

function KegList(props) {
  return(
    <React.Fragment>
      <div id="keg-list">
        <h3>Keg List</h3>
        {props.kegList.map((keg, index) =>
        <Keg
          name={keg.name}
          brewery={keg.brewery}
          type={keg.type}
          abv={keg.abv}
          price={keg.price}
        />
        )}
      </div>
    </React.Fragment>
  );
}

export default KegList;