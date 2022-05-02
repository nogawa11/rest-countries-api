import { useParams } from 'react-router';
import React from 'react';
import BorderCountry from './BorderCountry'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CountryDetails = () => {
  const { name } = useParams();
  let navigate = useNavigate();
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

  const prepareLanguages = (language) => {
    if (!language) return;
    const languagesArray = []
    Object.values(language).map((lang) => languagesArray.push(lang));
    return languagesArray.join(", ")
  };

  const prepareCurrencies = (currency) => {
    if (!currency) return;
    const currencies = []
    Object.values(currency).map((curr) => currencies.push(curr.name));
    return currencies.join(", ")
  };

  const findByAltSpell = (altSpell) => {
    if (!countries) return;
    return countries.find((country) => country.cca3 === altSpell)
  }

  const handleBackButton = () => {
    navigate(-1);
  };

  const countryInfo = countries
      .filter((country) => country.name.common.toLowerCase() === (name.toLowerCase()))
      .map((country) => {
        return <div className="country--info">
          <img src={country.flags.svg} alt="flag" />
          <div className="country--details">
            <h1>{country.name.common}</h1>
              <div className="country--column">
                <div>
                  <p><strong>Native Name:</strong> <span className="country--text">{Object.values(country.name.nativeName)[0]?.official}</span></p>
                  <p><strong>Population:</strong> <span className="country--text">{country.population.toLocaleString() || "N/A"}</span></p>
                  <p><strong>Region:</strong> <span className="country--text">{country.region || "N/A"}</span></p>
                  <p><strong>Sub Region:</strong> <span className="country--text">{country.subregion || "N/A"}</span></p>
                  <p><strong>Capital:</strong> <span className="country--text">{country.capital || "N/A"}</span></p>
                </div>
                <div>
                <p><strong>Top Level Domain:</strong> <span className="country--text">{country.tld || "N/A"}</span></p>
                <p><strong>Currencies:</strong> <span className="country--text">{prepareCurrencies(country.currencies) || "N/A"}</span></p>
                <p><strong>Languages:</strong> <span className="country--text">{prepareLanguages(country.languages) || "N/A"}</span></p>
                </div>
              </div>
            {country.borders ?
              <div className="country--borders">
                <strong>Border Countries:</strong>{country.borders.map((alterSpell) => {
                  const countryAlt = findByAltSpell(alterSpell);
                  return <BorderCountry name={countryAlt.name.common} key={countryAlt.name.common} />;
                })}
              </div> : null
            }
          </div>
        </div>
      });

  return (
    <>
      <div onClick={handleBackButton} className="button--back">
        <FontAwesomeIcon icon = {faArrowLeft} /> <span className="button--back-text">Back</span>
      </div>
      {countryInfo}
    </>
  )
}

export default CountryDetails;
