import React, { Component } from "react";
import { Route } from "react-router-dom";

import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
//import { logDOM } from '@testing-library/react';

import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

//firebase.analytics();

class App extends Component {
  render() {

    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
      {
        user 
          ? <p>Hello, {user.displayName}</p>
          : <p>Please sign in.</p>
      }
      {
        user
          ? <button onClick={signOut}>Sign out</button>
          : <button onClick={signInWithGoogle}>Sign in with Google</button>
      }
    </header>
        <Route exact path="/" render={(props) => <Home {...props} />} />
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
