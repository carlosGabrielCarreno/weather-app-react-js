import styles from '../css/ErrorMessage.module.css';

export const ErrorMessage = ({ errorMessage, onErrorMessage }) => {
  return (
    <div className={styles.container}>
      <h2>{errorMessage}</h2>
      <button onClick={onErrorMessage}>Okey</button>
    </div>
  );
};
