import React from "react";
import { FaBeer } from "react-icons/fa";

const IconComponent = () => {
  return (
    <div>
      <FaBeer />
      <FaBeer size={25} />
      <FaBeer style={{ fontSize: "30px", color: "gold" }} />
    </div>
  );
};

export default IconComponent;
