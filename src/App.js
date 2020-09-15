import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Header from './layout/components/Header';
import Footer from './layout/components/Footer';
import WeatherBody from './layout/components/WeatherBody';

import './App.css';
import { setCityData } from './redux/reducers/actions';
import Axios from 'axios';

const App = ({ setCityData }) => {
  const [foo, setFoo] = useState({});
  useEffect(() => {
    getCityData()
    .then((res) => setFoo(res.data))
    .catch((err) => console.log(err.message))
  }, []);

  const getCityData = () => {
    return Axios.get('https://api.openweathermap.org/data/2.5/forecast', {
      params: {
        id: "1277333",
        appid: "890a53bcf6b64447411f441272e988c0"
      }
    });
  }

  return (
    <div id="container" className="container">
      <Header />
      {Object.keys(foo).length > 0 && <WeatherBody foo={foo} />}
      <Footer />
    </div>
  );
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  setCityData: (obj) => dispatch(setCityData(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
