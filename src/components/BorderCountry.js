import { Link } from "react-router-dom";

const BorderCountry = (props) => {
  return (
    <Link to={`/country/${props.name}`}>
      <p>{props.name}</p>
    </Link>
  )
}

export default BorderCountry
