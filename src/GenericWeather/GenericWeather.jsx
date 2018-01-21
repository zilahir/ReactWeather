import React, { PropTypes } from 'react';
import './GenericWeather.scss';
import Snowing from './../weather/Snowing';
import Raining from './../weather/Raining';
import Cloudy from './../weather/Cloudy';
import PartlyCloudy from './../weather/PartlyCloudy';

function decideWeather(weather) {
  return weather === 'loght snow' ? <Snowing /> : <Cloudy />;
}

function GenericWeather({ city, temp, weather }) {
  const weatherClass = 'lofasz';
  return (
    <div className="weather-card">
      <div className={weatherClass} />
      <Snowing />
      <h1>{temp}</h1>
      <p>{city}</p>
    </div>
  );
}

GenericWeather.propTypes = {
  city: PropTypes.string,
  temp: PropTypes.number,
  weather: PropTypes.string,
};

GenericWeather.defaultProps = {
  city: '',
  temp: '',
  weather: '',
};

export default GenericWeather;
