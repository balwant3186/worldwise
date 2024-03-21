import { FC, createContext, useContext, useEffect, useState } from "react";
import { CityType } from "../components/CityList/CityList";
import { BASE_URL } from "../constants/constant";

type ContextType = {
  cities: CityType[];
  isLoading: boolean;
  fetchCityDetails: (id: number) => Promise<void>;
  currentCityDetails: CityType;
  addCity: (city: CityType) => Promise<void>;
  deleteCity: (id: number) => Promise<void>;
};

const initialCityState = {
  cityName: "",
  emoji: "",
  date: "",
  notes: "",
  position: { lat: 0, lng: 0 },
  id: 0,
  country: "",
};

const CitiesContext = createContext<ContextType>({
  cities: [],
  isLoading: false,
  fetchCityDetails: async () => {},
  currentCityDetails: initialCityState,
  addCity: async () => {},
  deleteCity: async () => {},
});

type CitiesProviderType = {
  children: React.ReactNode;
};

export const CitiesProvider: FC<CitiesProviderType> = ({ children }) => {
  const [cities, setCities] = useState<CityType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentCityDetails, setCurrentCityDetails] =
    useState(initialCityState);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  const fetchCityDetails = async (id: number) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCityDetails(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addCity = async (city: CityType) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/`, {
        method: "POST",
        body: JSON.stringify(city),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCities([...cities, data]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCity = async (id: number) => {
    try {
      setIsLoading(true);
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      setCities(cities.filter((city) => city.id !== id));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCityDetails,
        fetchCityDetails,
        addCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

export const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("useCities must be used within a CitiesProvider");
  }
  return context;
};
