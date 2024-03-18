import React from "react";
import { CityType } from "../CityList/CityList";

import classes from "./CityItem.module.css";
import { formatDate } from "../City/City";

type CityItemProps = {
  children?: React.ReactNode;
  city: CityType;
};

const CityItem: React.FC<CityItemProps> = ({ city }) => {
  const { cityName, emoji, date } = city;

  return (
    <li className={classes.cityItem}>
      <span className={classes.emoji}>{emoji}</span>
      <h3 className={classes.name}>{cityName}</h3>
      <time className={classes.date}>{formatDate(date)}</time>
      <button className={classes.deleteBtn}>&times;</button>
    </li>
  );
};
export default CityItem;
