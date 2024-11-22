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

  let type = props.types[0].type.name;

  return (
    <>
      <div className="mainCardWhat" id={`${type}`}>
        <div className="cardWhat" id={`${type}`} onClick={utilities}>
          <h1 className='cardTitle'>{props.species.name}</h1>
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

export default CardWhats;
