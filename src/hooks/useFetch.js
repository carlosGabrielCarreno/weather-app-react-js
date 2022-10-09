import { useEffect, useState } from 'react';
import { getCityByApi } from '../helpers/getCityByApi';

export const useFetch = () => {
  const [cities, setCities] = useState([]);
  const [placeName, setPlaceName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const setStates = async () => {
    const data = await getCityByApi(placeName, cities);
    if (typeof data === 'string') {
      setErrorMessage(data);
    } else if (typeof data === 'object') {
      setCities((oldCities) => [...oldCities, data]);
      setPlaceName('');
      setErrorMessage('');
    }
  };

  useEffect(() => {
    if (placeName.length > 0) {
      setStates();
    }
  }, [placeName, cities]);

  const onClose = (id) => {
    const filteredCities = cities.filter((city) => city.id !== id);
    setCities(filteredCities);
  };

  const onErrorMessage = () => {
    setErrorMessage('');
    setPlaceName('');
  };

  return {
    cities,
    errorMessage,
    setPlaceName,
    onClose,
    onErrorMessage,
  };
};
