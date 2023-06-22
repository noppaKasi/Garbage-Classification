import React from "react";
import ShoesGarbage from "../../assets/clothes.png";

function Shoes() {
  return (
    <div className="shoes">
      <img src={ShoesGarbage} width={"70px"} alt="Shoes Garbage" />
      <p>This trash belong to shoes garbage</p>
    </div>
  );
}

export default Shoes;
