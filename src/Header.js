import React from 'react'

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="logo">
        <a href="/"><img className="logo-image" src="/logo.svg" alt="Portland Permits" /></a>
      </h1>
    </header>
  )
}

export default Header
