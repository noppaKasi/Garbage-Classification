import React from "react";
import BrownGlassGarbage from "../../assets/brownglass.png";

function BrownGlass() {
  return (
    <div className="brown-glass">
      <img src={BrownGlassGarbage} width={"70px"} alt="Brown Glass" />
      <p>This trash belong to brown glass garbage</p>
    </div>
  );
}

export default BrownGlass;
