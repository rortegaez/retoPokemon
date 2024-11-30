import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import css en header.scss
import "./headers.css";

const Header = () => {
  const [whats, setWhats] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if(location.pathname === '/whatspokemon'){
      return setWhats(true)
    }else{
      return setWhats(false)
    }
},[location])

  return (
    <div className="titleContainer">
      <h1 className="titlePokemon">{whats ? 'Como te llamos' : 'Encuentra mi pareja'}</h1>
    </div>
  );
};

export default Header