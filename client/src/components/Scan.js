const WeatherComponent = () => {

  const fetchWeatherData = async (e) => {
    e.preventDefault();
    const location = e.target.elements.location.value;
    const apiKey = 'b02be164d047cfbed86694527d1d3a92';
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(location)}&appid=${apiKey}`;
    const response = await fetch(url);
    const cities = await response.json();
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${cities[0].lat}&lon=${cities[0].lon}&units=imperial&appid=${apiKey}`;
    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();     
    console.log(weatherData);
  };

  return (
    <div>
      <h2>Console for response</h2>
      <form onSubmit={fetchWeatherData}>
        <input type="text" name="location" placeholder="Enter a city or coordinates" />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default WeatherComponent;