import React from "react";
import BatteryGarbage from "../../assets/battery.png";

function Battery() {
  return (
    <div className="battery">
      <img src={BatteryGarbage} width={"70px"} alt="Battery Garbage" />
      <p>This trash belong to battery garbage</p>
    </div>
  );
}

export default Battery;
