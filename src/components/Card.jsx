import styles from '../css/Card.module.css';

export default function Card(props) {
  const { max, min, name, img, onClose } = props;

  return (
    <div className={styles.divContainer}>
      <div className={styles.divContainerButton}>
        <button className={styles.button} onClick={onClose}>
          X
        </button>
        <h2 className={styles.titlecard}>{name}</h2>
      </div>
      <div className={styles.containerTemp}>
        <div className={styles.containerTemperatures}>
          <p className={styles.containerTemperature}>
            min{' '}
            <span>
              {min} <strong>C°</strong>{' '}
            </span>
          </p>
          <p className={styles.containerTemperature}>
            max{' '}
            <span>
              {max} <strong>C°</strong>
            </span>
          </p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="clima"
        />
      </div>
    </div>
  );
}
