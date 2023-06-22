import React from "react";
import MetalGarbage from "../../assets/metal.png";

function Metal() {
  return (
    <div className="metal">
      <img src={MetalGarbage} width={"70px"} alt="Metal Garbage" />
      <p>This trash belong to metal garbage</p>
    </div>
  );
}

export default Metal;
