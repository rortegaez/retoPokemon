import React from "react";

//import style
import style from "../buttonRefresh.module.css";

const ButtonRefresh = ({ handleRefresh }) => {
  const utility = () => {
    handleRefresh();
  };

  return (
    <div className={style.containerBtn}>
      <div onClick={utility}>Refresh</div>
    </div>
  );
};

export default ButtonRefresh;
