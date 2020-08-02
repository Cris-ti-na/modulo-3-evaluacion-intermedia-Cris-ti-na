import React from 'react';
import '../App.css';
import data from '../data/pokemons.json';
import Pokelist from './Pokelist';


const App = () => {
  //console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <p>PokeCris</p>
      </header>
      <main>
        <div>
          <Pokelist  list={data} />
        </div>
      </main>
    </div>
  );
};

export default App;

/*
function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

