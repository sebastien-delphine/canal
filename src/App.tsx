import { useState } from "react";
import { SearchInput } from "./components/SearchInput";
import { WeatherData } from "./types";
import { LocationInformations } from "./components/LocationInformations";
import { LocationCurrentTime } from "./components/LocationCurrentTime";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData>();

  const fetchData = (location: string) => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=07c39328eb134ed3add233858230602&q=${location}&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  };

  return (
    <>
      <SearchInput fetchData={fetchData} />
      {weatherData && <LocationInformations weatherData={weatherData} />}
      {weatherData && (
        <LocationCurrentTime localtime={weatherData.location.localtime} />
      )}
    </>
  );
}

export default App;
