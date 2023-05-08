import React from "react";
import logo from "../assets/image/1200x600wa-removebg-preview.png";

const SvgComponent = ({ w, h, stroke }) => {
  return <img width={w} height={h} src={logo} alt="image" srcset="" />;
};

export default SvgComponent;
