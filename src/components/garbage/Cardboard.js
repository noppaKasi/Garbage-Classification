import React from "react";
import CardboardGarbage from "../../assets/paper.png";

function Cardboard() {
  return (
    <div className="cardboard">
      <img src={CardboardGarbage} width={"70px"} alt="Cardboard Garbage" />
      <p>This trash belong to cardboard garbage</p>
    </div>
  );
}

export default Cardboard;
