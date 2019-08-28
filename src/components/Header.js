import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="main-header">
        <h1>Recipe Finder!</h1>
        <h3>Find a list of recipes, first search by category</h3>
        <nav className="nav-bar">
          <p>
            <Link to="/">Go Home</Link>
          </p>
        </nav>
      </header>
    </>
  )
}

export default Header
