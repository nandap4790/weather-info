import React, { useEffect, useState } from "react";
import { get } from "lodash";
import { connect } from "react-redux";

import LocationDetailsCard from "../../../components/LocationDetailsCard";
import SingleDayCard from "../../../components/SingleDayCard";
import { setExpandedCards } from "../../../redux/reducers/actions";

const WeatherBody = ({foo, setExpandedCards}) => {
  // this gives an object with dates as keys
  const cloneCityData = [...foo.list];
  cloneCityData.forEach((item) => {
    item.date = new Date(item.dt * 1000).toLocaleString("en-US", {day: "numeric", timeZone: "Asia/Calcutta"});
  });

  let group = cloneCityData && cloneCityData.reduce((acc, currentVal) => {
    acc[currentVal.date] = [...acc[currentVal.date] || [], currentVal];
    return acc;
   }, {});

  const cityDetails = foo.city;
  
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

  const [initialSingleCard, setInitialSingleCard] = useState(null);

  useEffect(() => {
    const getDateFromTimestamp = foo.list[0].dt_txt.split(" ");
    setExpandedCards(getDateFromTimestamp[0]);
    setInitialSingleCard(0);
  }, [foo.list, setExpandedCards]);

  return (
    <>
      <LocationDetailsCard city={cityDetails} />
      {renderSingleDayCard()}
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setExpandedCards: (arr) => dispatch(setExpandedCards(arr)),
});

const mapStateToProps = (state) => ({
  cityData: get(state, ["cityDataReducer", "cityData"], null),
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherBody);