import React from "react";
import { get } from "lodash";

import styles from "./LocationDetailsCard.module.css";
import FieldWithlabel from "../FieldwithLabel";

const LocationDetailsCard = ({ city }) => {
	const latitude = `${get(city, ["coord", "lat"], null)}${String.fromCharCode(176)}`;
	const longitude = `${get(city, ["coord", "lon"], null)}${String.fromCharCode(176)}`	;

	return city ? <div className={styles["location-details-wrapper"]}>
		<h2 className={styles["city-name"]}>{city.name}</h2>
		<div className={styles["coordinates"]}>
			<FieldWithlabel wrapperClass="latitude" label="Latitude" value1={latitude} />
			<FieldWithlabel wrapperClass="longitude" label="Longitude" value1={longitude} />
		</div>
	</div > : null;
}

export default LocationDetailsCard;