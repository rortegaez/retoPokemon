import { useLocation } from 'react-router-dom';
// import css en header.scss
import "./headers.css";

const Header = () => {
  const location = useLocation()

  const headers = () => {
    if(location.pathname === '/whatspokemon') return true
    else {
      return false
    }
  }

  return (
    <div className="titleContainer">
      <h1 className="titlePokemon">{headers? '¿Cómo se llama' : 'Encuentra a su pareja' }</h1>
    </div>
  );
};

export default Header