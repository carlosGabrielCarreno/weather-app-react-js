import axios from 'axios';
import { useState } from 'react';
import Cards from './components/Cards';
import Nav from './components/Nav';
import { isIncludesCity } from './helpers/isIncludesCity';

const App = () => {
  const [cities, setCities] = useState([]);

  const getCityByApi = async (cityName = '') => {
    const path = `${process.env.REACT_APP_URL}q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
    const url = new URL(path);
    try {
      const { data } = await axios.get(url);
      const { main } = data;
      let city;
      if (main !== undefined) {
        city = {
          min: Math.round(main.temp_min),
          max: Math.round(main.temp_max),
          img: data.weather[0].icon,
          id: data.id,
          wind: data.wind.speed,
          temp: data.main.temp,
          name: data.name,
          weather: data.weather[0].main,
          clouds: data.clouds.all,
          latitud: data.coord.lat,
          longitud: data.coord.lon,
        };
      }
      if (!isIncludesCity(cities, city.name)) {
        setCities((oldCities) => [...oldCities, city]);
      } else {
        alert('This city already exists!');
      }
    } catch (error) {
      alert('City no found');
      console.log(error);
    }
  };

  const onClose = (id) => {
    setCities(cities.filter((city) => city.id !== id));
  };

  return (
    <div className="App">
      <Nav onSearch={getCityByApi} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
};

export default App;
