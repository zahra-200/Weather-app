import axios from "axios";

const client = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});
const apiKey = "31052be4b603794875189e560bb14ad0"
export async function getCurrrentWeather({lat , lon}: {lat : string , lon : string}) {
    
    const{data} =  await client(`/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);

    return data
}
