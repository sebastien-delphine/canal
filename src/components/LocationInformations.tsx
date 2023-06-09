import { WeatherData } from "../types";

type weatherDataProps = {
  weatherData: WeatherData;
};

const LocationInformations = ({ weatherData }: weatherDataProps) => {
  return (
    <div>
      <div>Ville: {weatherData.location.name}</div>
      <div>Température: {weatherData.current.temp_c}°C</div>
      <div>Humidité: {weatherData.current.humidity}</div>
      <div>Vent: {weatherData.current.wind_kph}</div>
      <div>Jour/Nuit: {weatherData.current.is_day === 1 ? "Jour" : "Nuit"}</div>
      <img src={`http:${weatherData.current.condition.icon}`} />
    </div>
  );
};

export { LocationInformations };
