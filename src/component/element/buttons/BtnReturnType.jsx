import React from "react";

//import css en buttons
import "./buttons.css";

export const BtnReturnType = ({ handleVisibleGallery }) => {
  return (
    <div onClick={handleVisibleGallery} className="containerBtn">
      <p className="nameBtn">Return</p>
    </div>
  );
};
