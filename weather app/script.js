async function getWeather() {
  const location = document.getElementById('locationInput').value;
  const resultCard = document.getElementById('weatherResult');
  const city = document.getElementById('city');
  const temp = document.getElementById('temperature');
  const condition = document.getElementById('condition');
  const icon = document.getElementById('icon');

  if (!location) {
    alert('Please enter a location');
    return;
  }

  const apiKey = 'e6fe764fef174730bf491555252707';
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
      alert(data.error.message);
      resultCard.classList.add('hidden');
      return;
    }

    city.textContent = `${data.location.name}, ${data.location.country}`;
    temp.textContent = `Temperature: ${data.current.temp_c} °C`;
    condition.textContent = data.current.condition.text;
    icon.src = data.current.condition.icon;
    resultCard.classList.remove('hidden');
  } catch (error) {
    alert('Failed to fetch weather. Please try again.');
    console.error(error);
  }
}
