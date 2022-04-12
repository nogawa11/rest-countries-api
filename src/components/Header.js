import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className='header'>
      <h1>Where in the word?</h1>
      <button className='btn-mode'>
        <FontAwesomeIcon icon = {faMoon} /> Dark Mode
      </button>
    </header>
  )
}

export default Header
