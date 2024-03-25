import { useParams } from "react-router-dom";
import classes from "./City.module.css";

import React, { useEffect } from "react";
import { useCities } from "../../contexts/CitiesContext";
import Spinner from "../Spinner/Spinner";
import BackButton from "../BackButton/BackButton";

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date || ""));

type CityProps = {
  children?: React.ReactNode;
};

const City: React.FC<CityProps> = () => {
  const { id } = useParams();

  const { currentCityDetails, fetchCityDetails, isLoading } = useCities();

  const { cityName, emoji, date, notes } = currentCityDetails;

  useEffect(() => {
    fetchCityDetails(id || "");
  }, [id, fetchCityDetails]);

  if (isLoading) return <Spinner />;

  return (
    <div className={classes.city}>
      <div className={classes.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={classes.row}>
        <h6>You went to {cityName} on</h6>
        {date && <p>{formatDate(date || "")}</p>}
      </div>

      {notes && (
        <div className={classes.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={classes.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
};
export default City;
