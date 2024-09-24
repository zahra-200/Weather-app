import { useState } from "react";
import { getCurrrentWeather } from "./servises/api";
import { WeatherData } from "./types/server";
import styled from "./app.module.css";
interface City {
  id: number;
  name: string;
  lat: string;
  lon: string;
}

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData>();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const selectedLocation: City = JSON.parse(value);
    getCurrrentWeather({
      lat: selectedLocation.lat,
      lon: selectedLocation.lon,
    }).then((res) => {
      setWeatherData(res);
    });
  };

  return (
    <div className={styled.mainContainer}>
      <p className={styled.title}>Weather App</p>
      <select onChange={handleChange} className={styled.selectBox}>
        <option value="Select" disabled selected>
          Select your City
        </option>
        {cities.map((item) => (
          <option key={item.id} value={JSON.stringify(item)}>
            {item.name}
          </option>
        ))}
      </select>
      <div className={styled.content}>
        <h2>
          {weatherData
            ? `${weatherData?.sys.country} / ${weatherData?.name}`
            : "Country / City"}
        </h2>

        <h1>{weatherData ? `${weatherData?.main.temp}` : "--"} </h1>

        <h2>
          {weatherData ? `${weatherData?.weather[0].description}` : "-- -- "}
        </h2>
        <h2>
          {" "}
          Feel : {weatherData ? ` ${weatherData?.main.feels_like}` : "--"}
        </h2>
        <p>Note : Temperatures are in Kelvin Unit.</p>
      </div>
    </div>
  );
}

export default App;

const cities = [
  { id: 1, name: "Mashhad", lat: "36.310699", lon: "59.599457" },
  { id: 2, name: "Tehran", lat: "35.715298", lon: "51.404343" },
  { id: 3, name: "Yazd", lat: "31.897423", lon: "54.356857" },
  { id: 4, name: "Rasht", lat: "37.280834", lon: "49.583057" },
  { id: 5, name: "Shiraz", lat: "29.591768", lon: "52.583698" },
  { id: 6, name: "Isfahan", lat: "32.661343", lon: "51.680374" },
  { id: 7, name: "Khozestan - Ahvaz", lat: "31.318327", lon: "	48.670620" },
  { id: 8, name: "Gazvin", lat: "36.269363", lon: "50.003201" },
  { id: 9, name: "Zanjan", lat: "36.674339", lon: "48.484467" },
  { id: 10, name: "Kerman", lat: "30.283937", lon: "57.083363" },
];
