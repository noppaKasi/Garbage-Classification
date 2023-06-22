import React from "react";
import PaperGarbage from "../../assets/paper.png";

function Paper() {
  return (
    <div className="paper">
      <img src={PaperGarbage} width={"70px"} alt="Paper Garbage" />
      <p>This trash belong to paper garbage</p>
    </div>
  );
}

export default Paper;
