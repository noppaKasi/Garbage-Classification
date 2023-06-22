import React from "react";
import PlasticGarbage from "../../assets/plastic.png";

function Plastic() {
  return (
    <div className="plastic">
      <img src={PlasticGarbage} width={"70px"} alt="Plastic Garbage" />
      <p>This trash belong to plastic garbage</p>
    </div>
  );
}

export default Plastic;
