import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/"><img className="logo-image" src="/logo.svg" alt="Portland Permits" /></Link>
      </h1>
    </header>
  )
}

export default Header
