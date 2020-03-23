import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import MainContainer from './Components/MainContainer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React from this link
        </a>
      </header> */}
      <Navigation />
      <MainContainer />
    </div>
  );
}

export default App;
