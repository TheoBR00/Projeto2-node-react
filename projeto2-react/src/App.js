import logo from './logo.svg';
import './App.css';
import React from 'react';
import Routes from './routes'

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lista Hearthstone</h1>
          <a href="./cards/?Basic" class="button">Card List</a>
          <a href="./decks" class="button">Decklist</a>
          <a href="./cardbacks" class="button">Cardbacks List</a>
          <Routes />
        </header>
      </div>
    );
}

export default App;