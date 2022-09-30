import { v4 as uuidv4 } from 'uuid';

import styles from '../css/Cards.module.css';
import Card from './Card';

export default function Cards(props) {
  const { cities, onClose } = props;
  if (cities) {
    return (
      <div className={styles.container}>
        {cities.map((city) => {
          return (
            <Card
              key={uuidv4()}
              max={city.max}
              min={city.min}
              name={city.name}
              img={city.img}
              onClose={() => onClose(city.id)}
              id={city.id}
            />
          );
        })}
      </div>
    );
  } else {
    return <div>No cities!</div>;
  }
}
