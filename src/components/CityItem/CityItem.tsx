import React, { MouseEvent } from "react";
import { CityType } from "../CityList/CityList";

import classes from "./CityItem.module.css";
import { formatDate } from "../City/City";
import { Link, useNavigate } from "react-router-dom";
import { useCities } from "../../contexts/CitiesContext";

type CityItemProps = {
  children?: React.ReactNode;
  city: CityType;
};

const CityItem: React.FC<CityItemProps> = ({ city }) => {
  const {
    cityName,
    emoji,
    date,
    id,
    position: { lat, lng },
  } = city;

  const { currentCityDetails, deleteCity } = useCities();

  const navigate = useNavigate();

  const handleDelete = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (id) {
      await deleteCity(id);
      navigate("/app/cities");
    }
  };

  return (
    <li>
      <Link
        to={`${id}?lat=${lat}&lng=${lng}`}
        className={`${classes.cityItem} ${
          currentCityDetails.id === id ? classes["cityItem--active"] : ""
        }`}
      >
        <span className={classes.emoji}>{emoji}</span>
        <h3 className={classes.name}>{cityName}</h3>
        <time className={classes.date}>{formatDate(date)}</time>
        <button className={classes.deleteBtn} onClick={handleDelete}>
          &times;
        </button>
      </Link>
    </li>
  );
};
export default CityItem;
