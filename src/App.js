
import './App.css';
import Keyboard from './component/keyboard'
import Header from './component/header'

//import { toast } from 'react-toastify'

function App() {

  return (
    <div className="App">
			<div className='mainContainer'>
				<Header className='header' />
				<Keyboard className='keyboard' />
			</div>
    </div>
  );
}

export default App
