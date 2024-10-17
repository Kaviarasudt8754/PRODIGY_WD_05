async function getWeather() {
    const location = document.getElementById('location').value || 'auto:ip';
    const apiKey = 'YOUR_API_KEY'; // Replace with actual API key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      displayWeather(data);
    } catch (error) {
      document.getElementById('weather-info').innerHTML = 'Unable to fetch weather data.';
    }
  }
  
  function displayWeather(data) {
    const { location, current } = data;
    document.getElementById('weather-info').innerHTML = `
      <h2>${location.name}, ${location.country}</h2>
      <p>${current.condition.text}</p>
      <p>Temperature: ${current.temp_c}°C</p>
      <p>Humidity: ${current.humidity}%</p>
      <p>Wind: ${current.wind_kph} kph</p>
    `;
  }
  