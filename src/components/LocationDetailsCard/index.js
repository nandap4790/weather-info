import React from "react";
import { get } from "lodash";

const LocationDetailsCard = ({ city }) => {
	const latitude = get(city, ["coord", "lat"], null);
	const longitude = get(city, ["coord", "lon"], null);

	return city ? <div className="location-details-wrapper">
		<h2 className="city-name-label" >City: <span>{city.name}</span></h2>
		<div className="geo-latitude-label">Latitude: <span>{latitude}</span></div>
		<div className="geo-longitude-label">Longitude: <span>{longitude}</span></div>
	</div > : null;
}

export default LocationDetailsCard;