import React, { Component } from "react";
//import { NavLink } from 'react-router-dom'
//import ToggleSwitch from './ToggleSwitch/ToggleSwitch'
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import smallLogo from "../../logos/small-logo.png";
// import labelLogo from "../../logos/tm-brick.png";


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
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
    </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      // <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100vw", height: "35vw" }}>
      // <header className="App-header" style={{ backgroundImage: `url(${labelLogo})`, backgroundSize: "70vw 25vh", backgroundRepeat: "no-repeat" }}>
      //   {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
      //   {user ? (
      //     <Button variant="contained" color="primary" onClick={signOut}>
      //       Sign out
      //     </Button>
      //   ) : (
      //       <Button
      //         variant="contained" color="primary" onClick={signInWithGoogle}>
      //         Sign in with Google
      //       </Button>
      //     )}
      // </header>
      // </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(NavBar);
