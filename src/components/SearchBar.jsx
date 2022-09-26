import { useState } from 'react';
import styles from '../css/SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const changeCity = (e) => {
    setCity(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity('');
      }}
      className={styles.container}
    >
      <input
        onChange={changeCity}
        value={city}
        className={styles.input}
        id="input"
        type="text"
        placeholder="City..."
      />
      <button className={styles.button}>Search</button>
    </form>
  );
}
