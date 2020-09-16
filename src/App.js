import React, { useEffect, useState } from "react";
import Axios from "axios";

import Header from "./layout/components/Header";
import Footer from "./layout/components/Footer";
import WeatherBody from "./layout/components/WeatherBody";

import "./App.css";

const App = () => {
  const [cityData, setCityData] = useState({});
  useEffect(() => {
    getCityData()
      .then((res) => setCityData(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  const getCityData = () => {
    return Axios.get("https://api.openweathermap.org/data/2.5/forecast", {
      params: {
        id: "1277333",
        appid: "890a53bcf6b64447411f441272e988c0",
      },
    });
  };

  return (
    <div id="container" className="container">
      <Header />
      {Object.keys(cityData).length > 0 && <WeatherBody cityData={cityData} />}
      <Footer />
    </div>
  );
};

export default App;
