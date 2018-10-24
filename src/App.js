import React, { Component } from 'react';
import './App.css';
import Project from './Project';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div>React Playground</div>
        <Project routeTo="google-maps" projectName="Google Maps" />
      </div>
    );
  }
}

export default App;
