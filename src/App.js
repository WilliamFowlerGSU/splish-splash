import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

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
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Footer />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App; 
