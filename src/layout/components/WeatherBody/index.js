import React, { useEffect, useState } from "react";
import { get } from "lodash";
import { connect } from "react-redux";

import LocationDetailsCard from "../../../components/LocationDetailsCard";
import SingleDayCard from "../../../components/SingleDayCard";

const WeatherBody = ({cityData}) => {
  // this gives an object with dates as keys
  const cloneCityData = cityData && [...cityData.list];
  cityData && cloneCityData.forEach((item) => {
    item.date = new Date(item.dt * 1000).toLocaleString("en-US", {day: "numeric", timeZone: "Asia/Calcutta"});
  });

  let group = cloneCityData && cloneCityData.reduce((acc, currentVal) => {
    acc[currentVal.date] = [...acc[currentVal.date] || [], currentVal];
    return acc;
   }, {});

  const cityDetails = cityData && cityData.city;
  
  const renderSingleDayCard = () => {
    let list = [];
    for(let item in group){
      const dateObj = group[item];
      list.push(dateObj)
    }

    return list.map((item, index) => {
      return <SingleDayCard singleDayData={item} cardIndex={index} initialSingleCard={initialSingleCard} />
    });
  }

  const [initialSingleCard, setInitialSingleCard] = useState(null)

  useEffect(() => {
    setInitialSingleCard(0);
  }, []);

  return (
    <>
      <LocationDetailsCard city={cityDetails} />
      {cityData && renderSingleDayCard()}
    </>
  )
}

const mapStateToProps = (state) => ({
  cityData: get(state, ["cityDataReducer", "cityData"], null),
})

export default connect(mapStateToProps)(WeatherBody);