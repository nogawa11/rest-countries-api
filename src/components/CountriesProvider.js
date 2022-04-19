import React from 'react';
import Country from './Country'
import { nanoid } from "nanoid";

export default function CountriesProvider() {
  const [countries, setCountries] = React.useState([]);
  const [state, setState] = React.useState('loading');

  React.useEffect(() => {
    async function getCountries() {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all')
        const data = await response.json();
        setCountries(data)
      } catch (err) {
        setState('error');
        console.log(err);
      }
    }
    getCountries()
  }, []);

  const countryElements = countries.map((country) => {
    return <Country
      key={country.id}
      id={country.id}
      name={country.name.common}
      region={country.region}
      population={country.population}
      capital={country.capital}
      flag={country.flags.png}
    />
  })

  return (
    <div className="cards">
      {countryElements}
    </div>
  )
};
