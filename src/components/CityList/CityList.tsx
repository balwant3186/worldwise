import React from "react";

import classes from "./CityList.module.css";
import Spinner from "../Spinner/Spinner";
import CityItem from "../CityItem/CityItem";
import Message from "../Message/Message";

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
  id: number;
};

type CityListProps = {
  children?: React.ReactNode;
  isLoading: boolean;
  cities: CityType[];
};

const CityList: React.FC<CityListProps> = ({ isLoading, cities }) => {
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
