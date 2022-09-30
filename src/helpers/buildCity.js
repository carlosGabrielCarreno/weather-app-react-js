export const buildCity = (main, data) =>
  main
    ? {
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
      }
    : undefined;
