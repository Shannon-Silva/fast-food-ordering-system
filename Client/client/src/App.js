import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login';
import Register from './register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Online Fast Food Service</h1>
        </header>
        <p className="App-intro">
          
        </p>

      </div>
    );
  }
}

export default App;
