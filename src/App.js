import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Page
import HomePage from "./component/Page/HomePage/index";
import WhatsPokemon from "./component/Page/WhatsPokemon/index.js";
import FindPokemon from "./component/Page/FindPokemon";

// import styles
import "./app.css";

function App() {
  return (
    <div className="app">
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
