import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <h2>The-Cocktail-Conundrum</h2>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/signup"}>SingUp</Link>
      </div>
    </nav>
  )
}

export default Navbar