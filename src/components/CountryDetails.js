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
                  <p><strong>Native Name:</strong> {Object.values(country.name.nativeName)[0]?.official}</p>
                  <p><strong>Population:</strong> {country.population || "N/A"}</p>
                  <p><strong>Region:</strong> {country.region || "N/A"}</p>
                  <p><strong>Sub Region:</strong> {country.subregion || "N/A"}</p>
                  <p><strong>Capital:</strong> {country.capital || "N/A"}</p>
                </div>
                <div>
                <p><strong>Top Level Domain:</strong> {country.tld || "N/A"}</p>
                <p><strong>Currencies:</strong> {prepareCurrencies(country.currencies) || "N/A"}</p>
                <p><strong>Languages:</strong> {prepareLanguages(country.languages) || "N/A"}</p>
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
