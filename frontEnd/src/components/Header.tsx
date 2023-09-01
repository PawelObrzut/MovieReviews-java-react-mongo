import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <ul className="nav__list" role="list">
        <li className="header__item icon">
          <FontAwesomeIcon icon={faVideoSlash}/> Movie Reviews
        </li>
        <li>Home</li>
        <li>Watch List</li>
      </ul>
      <div>
        <button className="nav__button">Register</button>
        <button className="nav__button">Log in</button>
      </div>
    </header>
  )
}

export default Header