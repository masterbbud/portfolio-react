import logo from './logo.svg';
import './App.css';

function App() {
  function clickHome() {
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-clickables">
          <div onClick={clickHome} className="App-navbox clicked">
            <div className="App-navtext">
              Home
            </div>
          </div>
          <div className="App-navbox">
            Resume
          </div>
          <div className="App-navbox">
            Projects
          </div>
          <div className="App-navbox">
            Contact
          </div>
        </div>
        <div className="App-colorbar">

        </div>
      </header>
    </div>
  );
}

export default App;
