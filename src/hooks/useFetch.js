import { useEffect, useState } from 'react';
import { getCityByApi } from '../helpers/getCityByApi';

export const useFetch = () => {
  const [cities, setCities] = useState([]);
  const [placeName, setPlacename] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (placeName.length > 0) {
      getCityByApi(placeName, cities).then((response) => {
        if (typeof response === 'string') {
          setErrorMessage(response);
        } else if (typeof response === 'object') {
          setCities((oldCities) => [...oldCities, response]);
          setPlacename('');
          setErrorMessage('');
        }
      });
    }
  }, [placeName, cities]);

  const onClose = (id) => {
    setCities(cities.filter((city) => city.id !== id));
  };

  const onErrorMessage = () => {
    setErrorMessage('');
    setPlacename('');
  };

  return {
    cities,
    errorMessage,
    setPlacename,
    onClose,
    onErrorMessage,
  };
};
