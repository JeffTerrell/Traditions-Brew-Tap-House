import React from "react";
import Keg from "./Keg";

function KegList(props) {
  return(
    <React.Fragment>
      <div id="keg-list">
        <h3>Keg List</h3>
      </div>
      <Keg
      />
    </React.Fragment>
  );
}

export default KegList;