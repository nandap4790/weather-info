import React from "react";

const LocationDetailsCard = ({ locationDetails }) => {

	return locationDetails ? <div className="location-details-wrapper">
		<h2 className="city-name-label" > {locationDetails.name}</h2>
	</div > : null;
}

export default LocationDetailsCard;