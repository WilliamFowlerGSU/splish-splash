import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ToggleSwitch from './ToggleSwitch/ToggleSwitch'
import splishLogo from '../../logos/logo.png'
import labelLogo from '../../logos/label.png'
import './NavBar.css';

function NavBar() {
  const [admin, setAdmin] = useState(false);

  function toggleAdmin() {
    setAdmin(!admin);
  }
  return (
    <div>
      <div>
      <div className="header" style={{ justifyContent: "space-between" }}>
        <header className="App-header">
          <img src={splishLogo} className="Splish-logo" alt="logo" />
          <img src={labelLogo} className="Label-logo" alt="logo" />
        </header>
          <ToggleSwitch value={admin} label="Admin" toggle={toggleAdmin} />
           </div>
      </div>
    </div >
  )
}

export default NavBar
