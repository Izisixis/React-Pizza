import React, { useContext, useRef, useCallback, useState } from 'react';
import { SearchContext } from './../../App';
import styles from './search.module.scss';
import debounce from 'lodash.debounce';

const Search = () => {
  const [value, setValue] = useState('');
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();

  const uppdateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 450),
    [],
  );

  const onChangeinput = (event) => {
    setValue(event.target.value);
    uppdateSearchValue(event.target.value);
  };

  const onClickClear = () => {
    setValue('');
    setSearchValue('');
    inputRef.current.focus();
  };

  return (
    <div className={styles.main}>
      <div className={styles.search}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="rgba(0,0,0, 0.2)">
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder="Поиск пиццы..."
        value={value}
        // eslint-disable-next-line no-restricted-globals
        onChange={() => onChangeinput(event)}></input>
      {value && (
        <svg
          className={styles.clear}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="rgba(0,0,0, 0.2)"
          onClick={() => onClickClear()}>
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
