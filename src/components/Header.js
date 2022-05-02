import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link to={"/"}>
        <h1>Where in the word?</h1>
      </Link>
      <button className='btn-mode'>
        <FontAwesomeIcon icon = {faMoon} /> Dark Mode
      </button>
    </header>
  )
}

export default Header
