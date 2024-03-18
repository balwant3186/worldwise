import classes from "./CountryItem.module.css";

import React from "react";

export type CountryType = {
  emoji: string;
  country: string;
};
type CountryItemProps = {
  country: CountryType;
};

const CountryItem: React.FC<CountryItemProps> = ({ country }) => {
  return (
    <li className={classes.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
};
export default CountryItem;
