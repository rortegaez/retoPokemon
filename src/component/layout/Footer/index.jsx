import React from "react";

export const Footer = ({ poke }) => {
  return (
    <div>
      <button onClick={() => poke()}>Refresh</button>
    </div>
  );
};

export default Footer;
