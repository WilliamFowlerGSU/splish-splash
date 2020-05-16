import React, { Component } from "react";
//import { NavLink } from 'react-router-dom'
//import ToggleSwitch from './ToggleSwitch/ToggleSwitch'
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import smallLogo from '../../logos/small-logo.png'
import labelLogo from '../../logos/label.png'
import './NavBar.css';


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

    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    console.log(user)

    return (
      <div>
        <div>
          <div className="header" style={{ justifyContent: "space-between" }}>
            <header className="App-header">
              <img src={smallLogo} className="Splish-logo" alt="logo" />
              <img src={labelLogo} className="Label-logo" alt="nameLogo" />
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
            {/* <ToggleSwitch value={admin} label="Admin" toggle={toggleAdmin} /> */}
          </div>
        </div>
      </div >
    )
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(NavBar);
