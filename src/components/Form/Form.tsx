// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { FormEvent, useState } from "react";

import classes from "./Form.module.css";

// export const convertToEmoji = (countryCode) => {
//   const codePoints = countryCode
//     .toUpperCase()
//     .split("")
//     .map((char) => 127397 + char.charCodeAt());
//   return String.fromCodePoint(...codePoints);
// };

import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

type FormProps = {
  children?: React.ReactNode;
};

const Form: React.FC<FormProps> = () => {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();

  const handleBack = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <form className={classes.form}>
      <div className={classes.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={classes.flag}>{emoji}</span> */}
      </div>

      <div className={classes.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={classes.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={classes.buttons}>
        <Button type="primary">Add</Button>
        <Button type="back" onClick={handleBack}>
          &larr; Back
        </Button>
      </div>
    </form>
  );
};
export default Form;
