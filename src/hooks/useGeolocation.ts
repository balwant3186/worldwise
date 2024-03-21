import { useState } from "react";

type PositionType = {
  lat: number;
  lng: number;
};

export const useGeolocation = (defaultPosition = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState<PositionType | null>(
    defaultPosition
  );
  const [error, setError] = useState<string | null>(null);

  const getPosition = () => {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  };

  return { isLoading, position, error, getPosition };
};
