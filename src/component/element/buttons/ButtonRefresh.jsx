import React from "react";

//import css en buttons.css
import "../../../index.css";

const ButtonRefresh = ({ handleRefresh }) => {
  const utility = () => {
    handleRefresh();
  };

  return (
    <div onClick={utility} className="containerBtn">
      <p className="nameBtn">Refresh</p>
    </div>
  );
};

export default ButtonRefresh;
