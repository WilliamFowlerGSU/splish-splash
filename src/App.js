import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";

// styles
import "./App.css";

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Footer />
      </div>
    );
  }
}

export default App; 
