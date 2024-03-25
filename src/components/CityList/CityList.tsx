import React from "react";

import classes from "./CityList.module.css";
import Spinner from "../Spinner/Spinner";
import CityItem from "../CityItem/CityItem";
import Message from "../Message/Message";
import { useCities } from "../../contexts/CitiesContext";

export type CityType = {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  id?: string;
};

type CityListProps = {
  children?: React.ReactNode;
};

const CityList: React.FC<CityListProps> = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={classes.cityList}>
      {cities?.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
};
export default CityList;
