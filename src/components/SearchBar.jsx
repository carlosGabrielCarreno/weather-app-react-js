import { useState } from 'react';
import styles from '../css/SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [placeName, setPlaceName] = useState('');

  const onChangeCity = (event) => {
    setPlaceName(event.target.value);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(placeName);
        setPlaceName('');
      }}
      className={styles.container}
    >
      <input
        onChange={onChangeCity}
        value={placeName}
        className={styles.input}
        id="input"
        type="text"
        placeholder="Write the city..."
      />
      <button className={styles.button}>Search</button>
    </form>
  );
}
