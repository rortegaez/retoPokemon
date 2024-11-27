import React from "react";

//import css en buttons.css
import "../../../index.css";

const ButtonRefresh = ({ handleRefresh }) => {
  const utility = () => {
    handleRefresh();
  };

  return (
    <div className="containerBtn">
      <div onClick={utility}>Refresh</div>
    </div>
  );
};

export default ButtonRefresh;
