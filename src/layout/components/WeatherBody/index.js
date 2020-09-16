import React from "react";
import { object } from "prop-types";

import LocationDetailsCard from "../../../components/LocationDetailsCard";
import SingleDayCard from "../../../components/SingleDayCard";

const WeatherBody = ({cityData}) => {
  // this gives an object with dates as keys
  const cloneCityData = [...cityData.list];
  cloneCityData.forEach((item) => {
    item.date = new Date(item.dt * 1000).toLocaleString("en-US", {day: "numeric", timeZone: "Asia/Calcutta"});
  });

  let group = cloneCityData && cloneCityData.reduce((acc, currentVal) => {
    acc[currentVal.date] = [...acc[currentVal.date] || [], currentVal];
    return acc;
   }, {});

  const cityDetails = cityData.city;
  
  const renderSingleDayCard = () => {
    let list = [];
    for(let item in group){
      const dateObj = group[item];
      list.push(dateObj)
    }

    return list.map((item, index) => {
      return <SingleDayCard singleDayData={item} cardIndex={index} />
    });
  }

  return (
    <>
      <LocationDetailsCard city={cityDetails} />
      {renderSingleDayCard()}
    </>
  )
}

WeatherBody.propTypes = {
  cityData: object
}

export default WeatherBody;