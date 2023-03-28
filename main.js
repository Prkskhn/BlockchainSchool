const weatherIcon = document.querySelector(".weatherIcon");
const weatherTemp = document.querySelector(".weatherTemp");

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        weatherTemp.innerText =
          data.name + "," + parseInt(data.main.temp) + "°C";

        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      });
  },
  () => alert("Not Allowed!")
);

// const a = async () => {
//     const response = await axios.get(url);

//     console.log(response.data);
// }
