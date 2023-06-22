import React from "react";
import ClothesGarbage from "../../assets/clothes.png";

function Clothes() {
  return (
    <div className="clothes">
      <img src={ClothesGarbage} width={"70px"} alt="Clothes Garbage" />
      <p>This trash belong to clothes garbage</p>
    </div>
  );
}

export default Clothes;
