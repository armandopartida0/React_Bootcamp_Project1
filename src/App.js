import React from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Card from './Card.js';
import BlankCard from './BlankCard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Cards">
          <BlankCard />
          <Card />
        </div>
      </header>
    </div>
  );
}

export default App;