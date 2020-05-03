import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import './App.css';
//import { logDOM } from '@testing-library/react';

class App extends Component {

  render() {
    return (
      <div className="App" >
        <NavBar />
        <Route exact path='/' render={(props) => <Home {...props}

        />}
        />
      </div>
    );
  }
}

export default App;
