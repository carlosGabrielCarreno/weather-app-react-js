import { buildCity } from './buildCity';
import { isIncludesCity } from './isIncludesCity';

const { REACT_APP_API_KEY, REACT_APP_URL } = process.env;

export const getCityByApi = async (placeName = '', cities) => {
  const urlForApi = `${REACT_APP_URL}${placeName}&appid=${REACT_APP_API_KEY}&units=metric`;
  const url_openWeather = new URL(urlForApi);
  try {
    const response = await fetch(url_openWeather);
    const data = await response.json();
    const { main } = data;

    const city = buildCity(main, data);

    if (!city) {
      throw new Error('City no found');
    }

    if (!isIncludesCity(cities, city?.name)) {
      return city;
    } else {
      return 'This city already exists!';
    }
  } catch (error) {
    return error.message;
  }
};
