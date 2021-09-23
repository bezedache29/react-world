import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        Accueil
      </NavLink>
      <NavLink to="/about" activeClassName="nav-active">
        À Propos
      </NavLink>
    </div>
  )
}

export default Navigation
