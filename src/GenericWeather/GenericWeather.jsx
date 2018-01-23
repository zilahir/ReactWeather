import React, { PropTypes } from 'react';
import './GenericWeather.scss';
import Snowing from './../weather/Snowing';
import Raining from './../weather/Raining';
import Cloudy from './../weather/Cloudy';
import PartlyCloudy from './../weather/PartlyCloudy';

function decideWeather({ weather }) {
  return weather === 'light snow' ? <Snowing /> : <Cloudy />;
  // todo: finish this
}

function GenericWeather({ city, temp, weather }) {
  return (
    <div className="weather-card">
      <div />
      {decideWeather({ weather })}
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

decideWeather.propTypes = {
  weather: PropTypes.string.isRequired,
};

export default GenericWeather;
