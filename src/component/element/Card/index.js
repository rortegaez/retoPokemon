import "./card.css";

const Card = ({ props, checks, id }) => {
  console.log(id);
  const name = props.species.name;
  const synth = window.speechSynthesis;
  const number = id;
  const utterThis = new SpeechSynthesisUtterance(name);
  utterThis.lang = "es-ES";

  const utility = () => {
    synth.speak(utterThis);
    checks(id);
  };

  let type = props.types[0].type.name;

  return (
    <>
      <div className="mainCard" id={`${type}`}>
        <div id={`${type}`} onClick={utility}>
          <h1>{props.species.name}</h1>
          <img
            src={props.sprites.other.home.front_default}
            alt={props.species.name}
            className="imgPokemon"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
