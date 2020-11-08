import logo from './logo.svg';
import './App.css';
import React from 'react';
import Routes from './routes'

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lista Hearthstone</h1>
          Navegação:
          <nobr>
            <a href="../cards/?Basic" class="button"> <button>Card List</button></a>
            <a href="../decks" class="button"><button>Decklist</button></a>
            <a href="../cardbacks" class="button"><button>Cardbacks List</button></a>
          </nobr>
          <hr/><br/>
          <Routes />
        </header>
      </div>
    );
}

export default App;