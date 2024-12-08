import { TYPES } from "../../logicalElements/context/constant";
import "./buttons.css";

export const BtnType = ({ handleType }) => {
  return (
    <>
      {Object.keys(TYPES).map((type) => (
        <div className="containerBtn">
          <p key={type} className="nameBtn" onClick={() => handleType(type)}>
            {type}
          </p>
        </div>
      ))}
    </>
  );
};
