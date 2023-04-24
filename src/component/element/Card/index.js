import "./card.css";

const Card = (props) => {
  const name = props.props.species.name;
  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(name);
  utterThis.lang = "es-ES";
  let type = props.props.types[0].type.name;

  return (
    <>
      <div className="mainCard" id={`${type}`}>
        <div id={`${type}`} onClick={() => synth.speak(utterThis)}>
          <h1>{props.props.species.name}</h1>
          <img
            src={props.props.sprites.other.home.front_default}
            alt={props.props.species.name}
            className="imgPokemon"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
