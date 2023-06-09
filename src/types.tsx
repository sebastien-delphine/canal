type WeatherData = {
  location: {
    name: string;
    localtime: string;
  };
  current: {
    temp_c: number;

    is_day: 1;
    condition: {
      icon: string;
    };
    wind_kph: number;
    humidity: number;
  };
};

export type { WeatherData };
