import React, { useState, useEffect, useContext, useCallback } from 'react';

const CountryContext = React.createContext({});

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState(null);
  const [state, setState] = useState('loading');

  const findCountry = useCallback(
    (name) => {
      if (!countries) return;
      return countries.find((country) => country.name.common === name);
    },
    [countries]
  )

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/all'
        );
        const data = await response.json();
        console.log(data)
        const sortedData = data.sort((a, b) => b.name.common - a.name.common);
        setCountries(sortedData);
        setState('resolved');
      } catch (err) {
        setState('error');
        console.log(err)
      }
    })();
  }, []);

  return <CountryContext.Provider value={{ countries, findCountry, state }}>{children}</CountryContext.Provider>;
};

const useCountries = () => {
  const { countries, findCountry, state } = useContext(CountryContext);

  return {
    countries,
    findCountry,
    state,
  };
};

export default useCountries;
