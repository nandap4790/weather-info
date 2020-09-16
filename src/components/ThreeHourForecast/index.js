import React from "react";
import { get } from "lodash";
import { object, number } from "prop-types";

import FieldWithlabel from "../FieldwithLabel";

import styles from "./ThreeHourForecast.module.css";

const ThreeHourForecast = ({ threeHourData, cardIndex, expandState }) => {
  const kelvinToCelsius = (temp) => {
    return Math.round(temp - 273.15);
  };

  const weather = get(threeHourData, ["weather", 0], []);
  const windObj = get(threeHourData, ["wind"], {});
  const threeHourDataMainObj = get(threeHourData, ["main"], {});
  const windDirection = `${windObj.deg}${String.fromCharCode(176)}`;
  const windSpeed = `${windObj.speed}m/sec`;
  const weatherIconUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  const precipitationPercent = `${threeHourData.pop * 100} %`;
  const cloudyPercent = `${threeHourData.clouds.all} %`;
  const maxMinTemp = `${kelvinToCelsius(
    threeHourDataMainObj.temp_max
  )}${String.fromCharCode(176)} / ${kelvinToCelsius(
    threeHourDataMainObj.temp_min
  )}${String.fromCharCode(176)}`;
  const feelsLikeTemp = `${kelvinToCelsius(
    threeHourDataMainObj.feels_like
  )}${String.fromCharCode(176)}`;
  const visibility = `${threeHourData.visibility}m`;
  const humidityPercent = `${Math.round(threeHourDataMainObj.humidity)} %`;
  const pressureVal = `${Math.round(threeHourDataMainObj.pressure)} hPa`;
  const groundLevel = `${Math.round(threeHourDataMainObj.grnd_level)} hPa`;
  const seaLevel = `${Math.round(threeHourDataMainObj.sea_level)} hPa`;

  return (
    <div className={styles["expanded-card-wrapper"]}>
      <div className={styles["temp-image-desc-wrapper"]}>
        <span className={styles["current-temp"]}>
          {`${kelvinToCelsius(threeHourDataMainObj.temp)}`}&#176;
        </span>
        <div className={styles["icon-wrapper"]}>
          <img
            className={styles["weather-icon"]}
            src={weatherIconUrl}
            alt={weather.icon}
          />
          <span className={styles["weather-description"]}>
            {weather.description}
          </span>
        </div>
        <FieldWithlabel
          wrapperClass="wind-details"
          label="Wind"
          value1={windDirection}
          value1Class="wind-direction"
          value2={windSpeed}
        />
        <FieldWithlabel
          wrapperClass="precipitation"
          label="Precipitation"
          value1={precipitationPercent}
        />
        <FieldWithlabel
          wrapperClass="cloudy"
          label="Cloudy"
          value1={cloudyPercent}
        />
      </div>
      {cardIndex === expandState.openCardIndex && expandState.isExpanded && (
        <div className={styles["other-details-wrapper"]}>
          <div className={styles["details-column-1"]}>
            <FieldWithlabel label="Max/Min" value1={maxMinTemp} />
            <FieldWithlabel label="Feels Like" value1={feelsLikeTemp} />
            <FieldWithlabel label="Visibility" value1={visibility} />
            <FieldWithlabel label="Humidity" value1={humidityPercent} />
          </div>
          <div className={styles["details-column-2"]}>
            <FieldWithlabel label="Pressure" value1={pressureVal} />
            <FieldWithlabel label="Ground Level" value1={groundLevel} />
            <FieldWithlabel label="Sea Level" value1={seaLevel} />
          </div>
        </div>
      )}
    </div>
  );
};

ThreeHourForecast.propTypes = {
  threeHourData: object,
  cardIndex: number,
  expandState: object,
};

export default ThreeHourForecast;
