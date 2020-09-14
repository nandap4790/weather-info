import React from "react";

import styles from "./ThreeHourForecast.module.css";

const ThreeHourForecast = ({threeHourData}) => {
  const timeOptions = {timeZone: "Asia/Calcutta", day: "numeric", month: "numeric", weekday: "short"};
  const time = new Date(threeHourData.dt * 1000).toLocaleString("en-IN", timeOptions);

  const renderExpandedCard = () => {
    return <div className={styles["expanded-card-wrapper"]}>
      <div className={styles["temp-image-desc-wrapper"]}>
        <span className={styles["current-temp"]}>{Math.round(threeHourData.main.temp - 273.15)}&#176;</span>
        <div className={styles["icon-wrapper"]}>
          <img className={styles["weather-icon"]} src={`http://openweathermap.org/img/wn/${threeHourData.weather[0].icon}@2x.png`} alt={threeHourData.weather[0].icon}/>
          <span className={styles["weather-description"]}>{threeHourData.weather[0].description}</span>
        </div>
        <div className={styles["wind-details"]}>
          <span className={styles["wind-label"]}>Wind: </span>
          <span className={styles["wind-direction"]}>{threeHourData.wind.deg}&#176;</span>
          <span className={styles["wind-speed"]}>{threeHourData.wind.speed}m/sec</span>
        </div>
        <div className={styles["precipitation"]}>
          <span className={styles["precipitation-label"]}>Precipitation: </span>
          <span className={styles["precipitation-percent"]}>
            {threeHourData.pop * 100} %
          </span>
        </div>
        <div className={styles["cloudy"]}>
          <span className={styles["cloudy-label"]}>Cloudy: </span>
          <span className={styles["cloudy-percent"]}>
            {threeHourData.clouds.all} %
          </span>
        </div>
      </div>
      <div className={styles["other-details-wrapper"]}>
        <div className={styles["details-column-1"]}>
          <div className={styles["field-wrapper"]}>
            <span className={styles["field-label"]}>Max/Min: </span>
            <span className={styles["field-val"]}>
              {Math.round(threeHourData.main.temp_max - 273.15)}&#176; / {Math.round(threeHourData.main.temp_min - 273.15)}&#176;
            </span>
          </div>
          <div className={styles["field-wrapper"]}>
            <span className={styles["field-label"]}>Feels Like: </span>
            <span className={styles["field-val"]}>
              {Math.round(threeHourData.main.temp_min - 273.15)}&#176;
            </span>
          </div>
          <div className={styles["field-wrapper"]}>
            <span className={styles["field-label"]}>Visibility: </span>
            <span className={styles["field-val"]}>
              {threeHourData.visibility}m
            </span>
          </div>
          <div className={styles["field-wrapper"]}>
            <span className={styles["field-label"]}>Humidity: </span>
            <span className={styles["field-val"]}>
              {Math.round(threeHourData.main.humidity)}%
            </span>
          </div>
        </div>
        <div className={styles["details-column-2"]}>
          <div className={styles["field-wrapper"]}>
            <span className={styles["field-label"]}>Pressure: </span>
            <span className={styles["field-val"]}>
              {Math.round(threeHourData.main.pressure)}hPa
            </span>
          </div>
          <div className={styles["field-wrapper"]}>
            <span className={styles["field-label"]}>Ground Level: </span>
            <span className={styles["field-val"]}>
              {Math.round(threeHourData.main.grnd_level)}hPa
            </span>
          </div>
          <div className={styles["field-wrapper"]}>
            <span className={styles["field-label"]}>Sea Level: </span>
            <span className={styles["field-val"]}>
              {Math.round(threeHourData.main.sea_level)}hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  }

  const renderMinimizedCard = () => {
    return <div className={styles["minimized-card"]}>
      <time className={styles.timestamp}>{time}</time>
      <span className={styles["current-temp"]}>{threeHourData.main.temp - 273.15}</span>
      <img className={styles["weather-icon"]} src={`http://openweathermap.org/img/wn/${threeHourData.weather[0].icon}@2x.png`} alt={threeHourData.weather[0].icon}/>
      <span className={styles["weather-description"]}>{threeHourData.weather[0].description}</span>
      <span className={styles["precipitation-percent"]}>{threeHourData.pop * 100} %</span>
      <span className={styles["wind-speed"]}>{threeHourData.wind.speed}m/sec</span>
    </div>
  }

  return renderExpandedCard()

  // return <div>

  //   <div>Cloudiness: {threeHourData.clouds.all}%</div>
  //   <time>Timestamp: {time}</time>
  //   <div>Temp: {threeHourData.main.temp - 273.15}</div>
  //   <div>Max Temp: {threeHourData.main.temp_max - 273.15}</div>
  //   <div>Min Temp: {threeHourData.main.temp_min - 273.15}</div>
  //   <div>Feels Like: {threeHourData.main.feels_like - 273.15}</div>
  //   <div>humidity: {threeHourData.main.humidity}%</div>
  //   <div>Pressure: {threeHourData.main.pressure}hPa</div>
  //   <div>Sea Level: {threeHourData.main.sea_level}hPa</div>
  //   {threeHourData.rain && <div>Rain for last 3h: {threeHourData.rain["3h"]} mm</div>}
  //   {threeHourData.pop && <div>Rain for last 3h: {threeHourData.pop} mm</div>}
  //   <div>visibility: {threeHourData.visibility} mtrs</div>
  //   <div>weather description: {threeHourData.weather[0].description}</div>
  //   <img src={`http://openweathermap.org/img/wn/${threeHourData.weather[0].icon}@2x.png`} alt={threeHourData.weather[0].icon}/>
  //   <div>weather main: {threeHourData.weather[0].main}</div>
  //   <div>wind deg: {threeHourData.wind.deg} degrees</div>
  //   <div>wind speed: {threeHourData.wind.speed}m/sec</div>
  // </div>
}

export default ThreeHourForecast;