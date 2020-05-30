import React, { Component } from "react";
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class NavBar extends Component {
  render() {

    const { user, signOut, signInWithGoogle } = this.props;
    console.log(user);

    return (
      <AppBar position="static" style={{ height: "13vh", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#002243" }}>
        <Toolbar style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
          <div className="ToolDiv" style={{ fontSize: "12px", padding: "5px" }}>
            <p style={{ margin: 1 }}>Splish Splash Laundromat</p>
            <p style={{ margin: 1 }}>2932 Canton Rd, Marietta, GA 30066</p>
            <p style={{ margin: 1 }}>(770)421-1819</p>
          </div>
          {user ? (
            <Button style={{
              background: 'linear-gradient(55deg, #006aff 50%, #00e6ff 80%)',
              border: 0,
              borderRadius: 3,
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
              color: 'white',
              height: 48,
              padding: '0 30px',
            }}
              variant="contained" onClick={signOut}>
              Sign out
            </Button>
          ) : (
              <Button
                style={{
                  background: 'linear-gradient(55deg, #006aff 50%, #00e6ff 80%)',
                  border: 0,
                  borderRadius: 3,
                  boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
                  color: 'white',
                  height: 48,
                  padding: '0 30px',
                }}
                variant="contained"
                onClick={signInWithGoogle}>
                Sign in with Google
              </Button>
            )}
        </Toolbar>
      </ AppBar>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(NavBar);