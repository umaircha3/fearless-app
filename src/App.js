import './App.css';
import CountButton from './Components/CountButton';

function App() {
  return (
    <div className="App">
      <header>
          <img src={'fearlesslogo.PNG'} alt={'logo'} className={'Header-Logo'}>

          </img>
        <h1>
          Fearless Counter!
        </h1>
      </header>
        <div>
            <CountButton />
        </div>
    </div>

  );
}

export default App;
