import React from "react";

import classes from "./CountryList.module.css";
import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";
import CountryItem, { CountryType } from "../CountryItem/CountryItem";
import { CityType } from "../CityList/CityList";

type CountryListProps = {
  children?: React.ReactNode;
  isLoading: boolean;
  cities: CityType[];
};

const CountryList: React.FC<CountryListProps> = ({ isLoading, cities }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const arr: string[] = [];
  const countries: CountryType[] = [];

  for (const city of cities) {
    if (!arr.includes(city.country)) {
      arr.push(city.country);
      countries.push({ country: city.country, emoji: city.emoji });
    }
  }

  return (
    <ul className={classes.countryList}>
      {countries?.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
};
export default CountryList;
