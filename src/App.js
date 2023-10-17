import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Page
import HomePage from "./component/Page/HomePage";
import WhatsPokemon from "./component/Page/WhatsPokemon";
import FindPokemon from "./component/Page/FindPokemon";

// import styles
import "./index.css";

function App() {
  return (
      <div className="mainCont">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/whatspokemon" element={<WhatsPokemon />} />
            <Route path="/findpokemon" element={<FindPokemon />} />+
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
