import React from "react";
import WhiteGlassGarbage from "../../assets/whiteglass.png";

function WhiteGlass() {
  return (
    <div className="white-glass">
      <img src={WhiteGlassGarbage} width={"70px"} alt="White Glass" />
      <p>This trash belong to white glass garbage</p>
    </div>
  );
}

export default WhiteGlass;
