import React from "react";
import Mug from "./../img/mug.png";

function AboutUs(){
  
  return(
    <React.Fragment>
      <div id="about-us">
        <h3>Welcome!</h3>
        <p>Come on in and enjoy our delicious offerings from some of the best breweries in the world!</p>
        <p>Local brews are also available year round!</p>
        <img src={Mug} alt="beer mug"></img>
      </div>
    </React.Fragment>
  );
}

export default AboutUs;