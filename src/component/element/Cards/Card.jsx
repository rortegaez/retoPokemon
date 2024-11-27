import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./card.css";
import CardFind from "./CardFind";
import CardWhats from "./CardWhat";

export const Card = ({ props }) => {
  const places = useLocation();

  const [position, setPosition] = useState("");

  useEffect(() => {
    setPosition(places.pathname);
  }, []);

  return (
    <>
      {position === "what" ? (
        <CardWhats props={props} />
      ) : (
        <CardFind props={props} />
      )}
    </>
  );
};
