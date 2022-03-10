import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/"/>
      </div>
    );
  }
}

export default App;
