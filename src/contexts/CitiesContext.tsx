import {
  FC,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { CityType } from "../components/CityList/CityList";
import { BASE_URL } from "../constants/constant";

type ContextType = {
  cities: CityType[];
  isLoading: boolean;
  fetchCityDetails: (id: string) => Promise<void>;
  currentCityDetails: CityType;
  addCity: (city: CityType) => Promise<void>;
  deleteCity: (id: string) => Promise<void>;
};

const initialCityState = {
  cityName: "",
  emoji: "",
  date: "",
  notes: "",
  position: { lat: 0, lng: 0 },
  id: "",
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

type StateType = {
  cities: CityType[];
  isLoading: boolean;
  currentCityDetails: CityType;
  error: string;
};

const initialState = {
  cities: [],
  isLoading: false,
  currentCityDetails: initialCityState,
  error: "",
};

type Action =
  | { type: "loading" }
  | { type: "cities/loaded"; payload: CityType[] }
  | { type: "city/loaded"; payload: CityType }
  | { type: "city/created"; payload: CityType }
  | { type: "city/deleted"; payload: string }
  | { type: "rejected"; payload: string };

const reducer = (state: StateType, action: Action): StateType => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload || [],
      };
    case "city/loaded":
      return {
        ...state,
        currentCityDetails: action.payload,
        isLoading: false,
      };
    case "city/created":
      return {
        ...state,
        cities: [...state.cities, action.payload],
        isLoading: false,
        currentCityDetails: action.payload,
      };
    case "city/deleted":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload || ""),
        isLoading: false,
        currentCityDetails: initialCityState,
      };
    case "rejected":
      return {
        ...state,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
};

export const CitiesProvider: FC<CitiesProviderType> = ({ children }) => {
  const [{ cities, isLoading, currentCityDetails }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchCities = async () => {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: "There was an error loading data...",
        });
      }
    };

    fetchCities();
  }, []);

  const fetchCityDetails = useCallback(async (id: string) => {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "There was an error loading data...",
      });
    }
  }, []);

  const addCity = async (city: CityType) => {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}/cities/`, {
        method: "POST",
        body: JSON.stringify(city),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      dispatch({ type: "city/created", payload: data });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "There was an error loading data...",
      });
    }
  };

  const deleteCity = async (id: string) => {
    try {
      dispatch({ type: "loading" });
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      dispatch({ type: "city/deleted", payload: id });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "There was an error loading data...",
      });
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
