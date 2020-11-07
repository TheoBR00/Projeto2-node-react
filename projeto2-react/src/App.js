import logo from './logo.svg';
import './App.css';
import React from 'react';
import Routes from './routes'

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lista Hearthstone</h1>
          <Routes />
        </header>
      </div>
    );
}

export default App;