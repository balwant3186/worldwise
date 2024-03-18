import React from "react";

import classes from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

type MapProps = {
  children?: React.ReactNode;
};

const Map: React.FC<MapProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const navigate = useNavigate();

  return (
    <div className={classes.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
    </div>
  );
};
export default Map;
