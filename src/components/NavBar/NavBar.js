import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ToggleSwitch from './ToggleSwitch/ToggleSwitch'
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
          <div className="header-logo">
            <NavLink to="/"><i className="icon_homedepot"></i></NavLink>
          </div>
          <div className="header-info">
            <label className="product-info" style={{ fontSize: 28 }}>Splish Splash</label>
          </div>
          <div className="right" style={{ display: "flex", alignItems: "center" }}>
            <div>
              <ToggleSwitch value={admin} label="Admin" toggle={toggleAdmin} />
            </div>
            <div className="header-actions">
              <NavLink to="/"><div><i className="icon_bank" style={{ fontSize: 32 }}></i>Home</div></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default NavBar
