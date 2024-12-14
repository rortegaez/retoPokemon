import "./card.css";

const CardWhats = ({ props, checks }) => {
  const name = props.species.name;
  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(name);
  utterThis.lang = "es-ES";

  const utilities = () => {
    synth.speak(utterThis);
    checks();
  };

  console.log(props, "props");

  let type = props.types[0].type.name;

  return (
    <>
      <div className={`mainCard ${type}`}>
        <div className="card" id={`${type}`} onClick={utilities}>
          <h1 className="namePok nameWhat">{props.species.name}</h1>
          <img
            src={props.sprites.other.home.front_default}
            alt={props.species.name}
            className="imgPok imgWhat"
          />
        </div>
      </div>
    </>
  );
};

export default CardWhats;
