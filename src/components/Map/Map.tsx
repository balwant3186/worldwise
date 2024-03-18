import React from "react";

import classes from "./Map.module.css";

type MapProps = {
  children?: React.ReactNode;
};

const Map: React.FC<MapProps> = () => {
  return <div className={classes.mapContainer}>Map</div>;
};
export default Map;
