import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  doLogin() {
    alert('I have to login');
  }
  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <button onClick={this.doLogin}>Login</button>
      </div>
    );
  }
}

export default App;
