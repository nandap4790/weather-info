import React from "react";

import LocationDetailsCard from "../../../components/LocationDetailsCard";
import { get } from "lodash";
import { connect } from "react-redux";

const WeatherBody = ({cityData}) => {
  const cityDetails = cityData && cityData.city;
  return (
    <LocationDetailsCard locationDetails={cityDetails} />
  )
}

const mapStateToProps = (state) => ({
  cityData: get(state, ["cityDataReducer", "cityData"], null),
})

export default connect(mapStateToProps)(WeatherBody);