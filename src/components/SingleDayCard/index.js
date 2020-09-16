import React, { useState, useEffect } from "react";
import { number, array } from "prop-types";

import styles from "./SingleDayCard.module.css";

import ThreeHourForecast from "../ThreeHourForecast";

const SingleDayCard = ({ singleDayData, cardIndex }) => {
  const [defaultHour, setDefaultHour] = useState(0);
  const [expandState, setExpandState] = useState({});

  useEffect(() => {
    const cardObj = {
      isExpanded: true,
      openCardIndex: cardIndex,
    };
    if (cardIndex === 0) {
      setExpandState(cardObj);
    } else {
      cardObj.isExpanded = false;
      setExpandState(cardObj);
    }
  }, [cardIndex]);

  const renderTimeTab = () => {
    return singleDayData.map((item, index) => {
      const options = {
        timeZone: "Asia/Calcutta",
        hour: "numeric",
        minute: "numeric",
      };
      const time = new Date(item.dt * 1000).toLocaleString("en-IN", options);
      const activeTimeClass =
        defaultHour === index ? styles["active-time"] : styles["inactive-time"];

      return (
        <time
          onClick={() => setDefaultHour(index)}
          className={`${activeTimeClass} time-${index} ${styles["time-button"]}`}
        >
          {time}
        </time>
      );
    });
  };

  const renderTimeDay = () => {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      timeZone: "Asia/Calcutta",
    };
    const time = new Date(singleDayData[0].dt * 1000).toLocaleString(
      "en-IN",
      options
    );
    return <time className={styles["time-day"]}>{time}</time>;
  };

  const toggleCard = (index, expandState) => {
    const cardObj = {
      isExpanded: expandState,
      openCardIndex: index,
    };
    setExpandState(cardObj);
  };

  const renderMaximizedCard = () => {
    return singleDayData.map((item, index) => {
      return index === defaultHour ? (
        <div>
          <div className={styles["timestamp-wrapper"]}>{renderTimeTab()}</div>
          <ThreeHourForecast
            threeHourData={item}
            cardIndex={cardIndex}
            expandState={expandState}
          />
        </div>
      ) : null;
    });
  };

  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["time-day-wrapper"]}>
        {renderTimeDay()}
        <div
          className={styles["plus-minus"]}
          onClick={() => toggleCard(cardIndex, !expandState.isExpanded)}
        >
          {!expandState.isExpanded && (
            <div className={styles["vertical-line"]}></div>
          )}
          <div className={styles["horizontal-line"]}></div>
        </div>
      </div>
      {renderMaximizedCard()}
    </div>
  );
};

SingleDayCard.propTypes = {
  singleDayData: array,
  cardIndex: number,
};

export default SingleDayCard;
