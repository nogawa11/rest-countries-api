import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Country from './Country'
import { nanoid } from 'nanoid'

const Search = () => {
  const [countries, setCountries] = React.useState([]);
  const [state, setState] = React.useState('loading');

  const [search, setSearch] = React.useState();
  const [filter, setFilter] = React.useState();
  const [filterDetails, setFilterDetails] = React.useState(false);

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

  React.useEffect(() => {
    function getCountries() {

    }
    getCountries()
  }, []);

  const countryElements = countries.map((country) => {
    return <Country
      key={nanoid()}
      id={nanoid()}
      name={country.name.common}
      region={country.region}
      population={country.population}
      capital={country.capital}
      flag={country.flags.png}
    />
  })

  function handleChange(event) {
    setSearch(event.target.value)
  }

  function handleFilter(event) {
    setFilter(event.target.value)
    setFilterDetails(prevState => !prevState)
  }

  function openFilter() {
    setFilterDetails(prevState => !prevState)
  }

  const list = countries
      .filter((country) => country.name.common.toLowerCase().includes(search ? search.toLowerCase() : ''))
      .filter((country) => country.region.toLowerCase().includes(filter && filter !=='All' ? filter.toLowerCase() : ''))
      .map((country) => {
        return <Country
          key={nanoid()}
          id={nanoid()}
          name={country.name.common}
          region={country.region}
          population={country.population}
          capital={country.capital}
          flag={country.flags.png}
        />
      });

  return (
    <div className="page">
      <div className={filterDetails ? 'search-field' : 'search-field hide'}>
        <div className='search'>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" name="search" onChange={handleChange} value={search ? search : ''} placeholder='Search for a country...'/>
        </div>
        <div className={filterDetails ? 'filter flip' : 'filter'} onClick={openFilter}>
          <button className='btn-filter'>
            {filter ? filter : 'Filter by Region'}
          </button>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <form className='filter-details'>
            <label name="africa">All
              <input name="filter" type="radio" value="All" onChange={handleFilter}/>
            </label>
            <label name="africa">Africa
              <input name="filter" type="radio" value="Africa" onChange={handleFilter}/>
            </label>
            <label name="america">America
              <input name="filter" type="radio" value="America" onChange={handleFilter}/>
            </label>
            <label name="asia">Asia
              <input name="filter" type="radio" value="Asia" onChange={handleFilter}/>
            </label>
            <label name="europe">Europe
              <input name="filter" type="radio" value="Europe" onChange={handleFilter}/>
            </label>
            <label name="oceania">Oceania
              <input name="filter" type="radio" value="Oceania" onChange={handleFilter}/>
            </label>
        </form>
      </div>
        <div className="cards">
        {search || filter ? list : countryElements}
      </div>
    </div>
  )
}

export default Search
