import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App" >
        <NavBar />
        <Route exact path='/' render={(props) => <Home {...props}

        />}
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
