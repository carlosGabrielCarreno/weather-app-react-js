import style from '../css/Card.module.css';

const Card = (props) => {
  const { max, min, name, img, onClose } = props;

  return (
    <div className={style.card}>
      <div className={style.cardContainerHeaderCard}>
        <button className={style.cardButton} onClick={onClose}>
          X
        </button>
        <h2 className={style.titlecard}>{name}</h2>
      </div>
      <div className={style.containerTemp}>
        <div className={style.containerTemperatures}>
          <p className={style.containerTemperature}>
            min{' '}
            <span>
              {min} <strong>C°</strong>{' '}
            </span>
          </p>
          <p className={style.containerTemperature}>
            max{' '}
            <span>
              {max} <strong>C°</strong>
            </span>
          </p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt={name}
        />
      </div>
    </div>
  );
};

export default Card;
