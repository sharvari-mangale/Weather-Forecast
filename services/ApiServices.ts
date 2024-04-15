
export const getCities = async () => {
  try {
    const response = await fetch('https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-1000/api/?disjunctive.cou_name_en&sort=name');
    if (!response.ok) {
      throw new Error('Failed to fetch cities data');
    }
    const data = await response.json();
    // Assuming the data structure is an array of cities
    return data.map((city: any) => ({
      id: city.id,
      name: city.city,
      country: city.country,
      timezone: city.timezone
    }));
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};

export const getWeather = async (city: string) => {
  try {
    const Api_key = "1a36eccebf93a59423c7ae9fdde96af5";
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}`;
    const response = await fetch(currentWeatherUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};
