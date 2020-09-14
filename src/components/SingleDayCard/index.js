import React, { useState, useEffect } from "react";

import styles from "./SingleDayCard.module.css";

import ThreeHourForecast from "../ThreeHourForecast";

const SingleDayCard = ({singleDayData, cardIndex, initialSingleCard}) => {
  const [defaultHour, setDefaultHour] = useState(0);

  useEffect(() => {

  }, []);

  const renderThreeHourForecast = () => {
    return singleDayData.map((item, index) => {
      return index === defaultHour ? <div className="single-day-card"><ThreeHourForecast threeHourData={item} /></div> : null
    });
  }

  const renderTimeTab = () => {
    return singleDayData.map((item, index) => {
      const options = {
        timeZone: "Asia/Calcutta",
        hour: "numeric",
        minute: "numeric"
      };
      const time = new Date(item.dt * 1000).toLocaleString("en-IN", options);
      const activeTimeClass = defaultHour === index ? styles["active-time"] : styles["inactive-time"];

      return <time onClick={() => setDefaultHour(index)} className={`${activeTimeClass} time-${index} ${styles["time-button"]}`}>{time}</time>
    });
  }

  const renderTimeDay = () => {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      timeZone: "Asia/Calcutta",
    };
    const time = new Date(singleDayData[0].dt * 1000).toLocaleString("en-IN", options);
    return <time className={styles["time-day"]}>{time}</time>
  }

  const renderFirstDayMaximizedCard = () => {
    return <div className={styles["maximized-card"]}>
      {renderTimeDay()}
      <div className={styles["timestamp-wrapper"]}>{renderTimeTab()}</div>
      {renderThreeHourForecast()}
    </div>
  }

  const renderFirstHourMinimizedCard = () => {
    return <div className="single-day-card"><ThreeHourForecast threeHourData={singleDayData[0]} /></div>
  }
  return <div>
    {renderFirstDayMaximizedCard()}
    {/* {cardIndex === initialSingleCard ? renderFirstDayMaximizedCard() : null} */}
  </div>
}

export default SingleDayCard;