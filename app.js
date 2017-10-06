import React, { Component } from 'react';
import './src/styles/main.scss';
import Menu from './src/components/Menu/index.js';
import MainContent from './src/components/MainContent/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <MainContent />
      </div>
    );
  }
}

export default App;
