import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav style={{ textAlign: "center", marginTop: "20px" }}>
      <Link to="/" style={{ padding: "10px" }}>
        Home
      </Link>
      <Link to="/profile" style={{ padding: "10px" }}>
        Profile
      </Link>
      <Link to="/about" style={{ padding: "10px" }}>
        About
      </Link>
    </nav>
  )
}

export default NavBar