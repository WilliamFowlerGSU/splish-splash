import React, { Component } from "react";
//import { NavLink } from 'react-router-dom'
//import ToggleSwitch from './ToggleSwitch/ToggleSwitch'
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";

import smallLogo from "../../logos/small-logo.png";
import labelLogo from "../../logos/label.png";
import "./NavBar.css";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class NavBar extends Component {
  render() {
    //const [admin, setAdmin] = useState(false);

    // function toggleAdmin() {
    //   setAdmin(!admin);
    // }

    const { user, signOut, signInWithGoogle } = this.props;
    console.log(user);

    return (
      <div>
        <div className="header" style={{ justifyContent: "space-between" }}>
          <header className="App-header">
            <img src={smallLogo} className="Splish-logo" alt="logo" />
            <img src={labelLogo} className="Label-logo" alt="nameLogo" />
            <img src={smallLogo} className="Splish-logo" alt="logo" />
            {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
            {user ? (
              <Button variant="contained" color="primary" onClick={signOut}>
                Sign out
              </Button>
            ) : (
              <Button
                variant="contained" color="primary" onClick={signInWithGoogle}
              >
                Sign in with Google
              </Button>
            )}
          </header>
          {/* <ToggleSwitch value={admin} label="Admin" toggle={toggleAdmin} /> */}
        </div>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(NavBar);
