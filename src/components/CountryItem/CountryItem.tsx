import classes from "./CountryItem.module.css";

import React from "react";

type CountryItemProps = {
  country: {
    emoji: string;
    country: string;
  };
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
