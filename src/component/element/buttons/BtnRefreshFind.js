import React from "react";

//import style
import "../../../index.css";

const ButtonRefresh = ({ severalUtility }) => {
  const utility = () => {
    severalUtility();
  };

  return (
    <div className='containerBtn'>
      <div onClick={utility}>Refresh</div>
    </div>
  );
};

export default ButtonRefresh;
