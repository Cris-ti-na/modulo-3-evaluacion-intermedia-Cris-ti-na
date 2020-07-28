import React from 'react';
import '../App.css';
import List from './List';
import '../data/pokemons.json';

const App = props => {
  console.log(props);
  return (
    <div className="App">
      <header classname="App-header">
        <p>Mi lista de pokemon</p>
      </header>
      <main>
        <div>
          <List pokemons={"id"} />
        </div>
      </main>
    </div>
  );
};



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

export default App;