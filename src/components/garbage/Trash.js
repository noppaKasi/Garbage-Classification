import React from "react";
import TrashGarbage from "../../assets/trash.png";

function Trash() {
  return (
    <div className="trash">
      <img src={TrashGarbage} width={"70px"} alt="Trash Garbage" />
      <p>This trash belong to trash garbage</p>
    </div>
  );
}

export default Trash;
