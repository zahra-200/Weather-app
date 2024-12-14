import { useState } from "react";
import { getCurrrentWeather } from "./servises/api";
import { WeatherData } from "./types/server";

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
    <div className=" bg-slate-400 bg-opacity-80 rounded-3xl p-3 sm:p-14">
      <div className="flex flex-col w-72 text-slate-800 justify-center gap-5  ">
        <p className="text-2xl sm:text-3xl font-semibold">Weather App</p>
        <select
          onChange={handleChange}
          className="text-blue-950 font-medium text-center rounded-md"
        >
          <option value="Select" disabled selected>
            Select your City
          </option>
          {cities.map((item) => (
            <option key={item.id} value={JSON.stringify(item)}>
              {item.name}
            </option>
          ))}
        </select>
        <div className="flex flex-col gap-5">
          <h2 className=" text-xl sm:text-2xl font-medium">
            {weatherData
              ? `${weatherData?.sys.country} / ${weatherData?.name}`
              : "Country / City"}
          </h2>

          <h1 className=" text-4xl sm:text-5xl font-extrabold text-center">
            {weatherData ? `${weatherData?.main.temp}` : "--"}{" "}
          </h1>

          <h2 className=" text-lg sm:text-xl font-medium">
            {weatherData ? `${weatherData?.weather[0].description}` : "-- -- "}
          </h2>
          <h2 className="text-lg sm:text-xl font-medium">
            {" "}
            Feel : {weatherData ? ` ${weatherData?.main.feels_like}` : "--"}
          </h2>
          <hr />
          <div>
            <p className="font-medium text-sm tracking-wider">
              <span className="font-bold text-lg sm:text-xl text-white">Note :</span>{" "}
              Temperatures are in Kelvin Unit.
            </p>
            <h4 className="font-medium text-sm tracking-wider">
              <span className="text-white font-bold text-lg sm:text-xl mr-1">*</span>If
              you live in Iran , please turn on VPN.
            </h4>
          </div>
        </div>
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
