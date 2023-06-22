import React from "react";
import BiologicalGarbage from "../../assets/biological.png";

function Biological() {
  return (
    <div className="biological">
      <img src={BiologicalGarbage} width={"70px"} alt="Biological Garbage" />
      <p>This trash belong to biological garbage</p>
    </div>
  );
}

export default Biological;
