// import componets
import Header from "./component/layout/Header/index.js";
import Keyboard from "./component/layout/Keyboard/index.js";

// import styles
import "./app.css";
function App() {
  return (
    <div className="mainContainer">
      <Header className="header" />
      <Keyboard className="keyboard" />
    </div>
  );
}

export default App;
