import React, { useEffect, useState } from "react";

import classes from "./Map.module.css";
import { useNavigate } from "react-router-dom";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useCities } from "../../contexts/CitiesContext";
import Button from "../Button/Button";
import { useGeolocation } from "../../hooks/useGeolocation";
import { useUrlPosition } from "../../hooks/useUrlPosition";

type MapProps = {
  children?: React.ReactNode;
};

const Map: React.FC<MapProps> = () => {
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const { isLoading, position, getPosition } = useGeolocation();

  const { lat, lng } = useUrlPosition();

  const navigate = useNavigate();

  const { cities } = useCities();

  useEffect(() => {
    if (lat && lng) {
      setMapPosition([+lat, +lng]);
    }
  }, [lat, lng]);

  const handlePosition = () => {
    getPosition();
    if (!isLoading && position) {
      navigate(`?lat=${position.lat}&lng=${position.lng}`);
    }
  };

  return (
    <div className={classes.mapContainer}>
      {!position && (
        <Button type="position" onClick={handlePosition}>
          {isLoading ? "Loading..." : "Use your position"}
        </Button>
      )}
      <MapContainer
        // center={mapPosition}
        // zoom={6}
        // scrollWheelZoom={true}
        className={classes.map}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />

        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} zoom={6} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

type ChangeCenterType = {
  position: number[];
  zoom: number;
};

const ChangeCenter: React.FC<ChangeCenterType> = ({ position, zoom }) => {
  const map = useMap();

  map.setView(position, zoom);

  return null;
};

const DetectClick = () => {
  const navigate = useNavigate();
  useMapEvents({
    click: (e: { latlng: { lat: number; lng: number } }) =>
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });

  return null;
};

export default Map;
