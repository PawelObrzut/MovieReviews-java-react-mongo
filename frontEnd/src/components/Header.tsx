import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <ul className="nav__list" role="list">
        <li className="header__item icon">
          <FontAwesomeIcon icon={faVideoSlash}/> Movie Reviews
        </li>
        <li>
          <Link to={"/"} className="link">
          Home
          </Link>
        </li>
        <li>Watch List</li>
      </ul>
      <div>
        <button className="button">Register</button>
        <button className="button">Log in</button>
      </div>
    </header>
  )
}

export default Header