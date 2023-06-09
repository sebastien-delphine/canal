import { useState } from "react";

type SearchInputProps = {
  fetchData: (location: string) => void;
};

const SearchInput = ({ fetchData }: SearchInputProps) => {
  const [location, setLocation] = useState("");

  const handleChange = (value: string) => {
    setLocation(value);
  };

  return (
    <div>
      <div>Weather React App</div>
      <div>Enter location</div>
      <input
        type="text"
        value={location}
        onChange={(event) => handleChange(event.target.value)}
      />
      <input type="button" value="Search" onClick={() => fetchData(location)} />
    </div>
  );
};

export { SearchInput };
