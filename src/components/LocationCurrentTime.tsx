import { useEffect, useState } from "react";

type LocationCurrentTimeProps = {
  localtime: string;
};

const LocationCurrentTime = ({ localtime }: LocationCurrentTimeProps) => {
  const [currentTime, setCurrentTime] = useState(new Date(localtime));

  useEffect(() => {
    setCurrentTime(new Date(localtime));

    const interval = setInterval(() => {
      setCurrentTime((currentTime) => new Date(currentTime.getTime() + 1000));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [localtime]);

  return (
    <div>
      <div>
        Date et heure: {currentTime.toLocaleDateString()}{" "}
        {currentTime.toLocaleTimeString()}
      </div>
    </div>
  );
};

export { LocationCurrentTime };
