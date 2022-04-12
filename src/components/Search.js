import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div className='search-field'>
      <div className='search'>
        <FontAwesomeIcon icon={faSearch} />
        <input placeholder='Search for a country...'/>
      </div>
      <div className='filter'>
        <button className='btn-filter'>
          Filter by Region
        </button>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </div>
  )
}

export default Search
