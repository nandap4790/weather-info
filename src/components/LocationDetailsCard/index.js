import React from "react";
import { get } from "lodash";
import { object } from "prop-types";

import FieldWithlabel from "../FieldwithLabel";

import styles from "./LocationDetailsCard.module.css";

const LocationDetailsCard = ({ city }) => {
  const superDegree = String.fromCharCode(176);
  const latitude = `${get(city, ["coord", "lat"], null)}${superDegree}`;
  const longitude = `${get(city, ["coord", "lon"], null)}${superDegree}`;

  return city ? (
    <div className={styles["location-details-wrapper"]}>
      <h2 className={styles["city-name"]}>{city.name}</h2>
      <div className={styles["coordinates"]}>
        <FieldWithlabel
          wrapperClass="latitude"
          label="Latitude"
          value1={latitude}
        />
        <FieldWithlabel
          wrapperClass="longitude"
          label="Longitude"
          value1={longitude}
        />
      </div>
    </div>
  ) : null;
};

LocationDetailsCard.propTypes = {
  city: object,
};

export default LocationDetailsCard;
