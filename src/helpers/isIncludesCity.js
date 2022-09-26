export const isIncludesCity = (cities, cityName) => {
  return cities.some(({ name }) => name === cityName);
};
