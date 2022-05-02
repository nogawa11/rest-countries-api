import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <Link to={"/"}>
        <h1>Where in the word?</h1>
      </Link>
      <button className="btn--mode" onClick={props.changeTheme}>
        <span className="icon--mode">{props.isDarkTheme ? <FontAwesomeIcon icon = {faSun} /> : <FontAwesomeIcon icon = {faMoon} />}</span>
        {props.isDarkTheme ? " Light Mode" : " Dark Mode"}
      </button>
    </header>
  )
}

export default Header
