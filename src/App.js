import React, { Component } from 'react';
import './App.css';
import Project from './Project';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div>React Playground</div>
        <Project routeTo="google-maps" projectName="Google Maps" />
        <Project routeTo="lifecycle-methods" projectName="Lifecycle Methods" />
        <Project routeTo="transitions" projectName="Transitions" />
        <Project routeTo="css-flip-animations" projectName="CSS Flip Animations" />
      </div>
    );
  }
}

export default App;
