import styles from "../css/Nav.module.css";
import SearchBar from "./SearchBar";

function Nav({ onSearch }) {
  return (
    <div className={styles.container}>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
