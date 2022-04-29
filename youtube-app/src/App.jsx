import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Left } from './Components/Left';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      {/* <iframe className='frame' src="https://www.youtube.com/embed/BDx_YTf9x1g" allowFullScreen={true} frameborder={0}></iframe> */}
    
      <Left/>    
    </div>
  );
}

export default App;
