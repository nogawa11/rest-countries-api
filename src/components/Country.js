export default function Country(props) {
  return (
    <div className="card--country">
      <img src={props.flag} alt="flag" />
      <div className="card--text">
        <h3>{props.name}</h3>
        <p><span className="bold">Population: </span>{props.population}</p>
        <p><span className="bold">Region: </span>{props.region}</p>
        <p><span className="bold">Capital: </span>{props.capital}</p>
      </div>
    </div>
  )
}
