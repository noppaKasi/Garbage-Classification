import React from "react";
import GreenGlassGarbage from "../../assets/greenglass.png";

function GreenGlass() {
  return (
    <div className="green-glass">
      <img src={GreenGlassGarbage} width={"70px"} alt="Green Glass" />
      <p>This trash belong to green glass garbage</p>
    </div>
  );
}

export default GreenGlass;
