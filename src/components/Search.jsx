import React, { useContext } from 'react';
import { SearchContext } from '../App';

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  console.log(searchValue);
  return (
    <span className="search">
      <div className="searchEvent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#a7a7a7">
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
      </div>
      <input
        placeholder="Поиск пиццы..."
        value={searchValue}
        // eslint-disable-next-line no-restricted-globals
        onChange={() => setSearchValue(event.target.value)}></input>
      {searchValue && (
        <svg
          className="clear"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#a7a7a7"
          onClick={() => setSearchValue('')}>
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      )}
    </span>
  );
};

export default Search;
