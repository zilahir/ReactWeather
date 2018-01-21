import React from 'react';
import './scss/weather.scss';

const Cloudy = () => {
  return (
    <div className="mostly-cloudy">
      <div className="back-cloud" />
      <div className="cloud-shadow" />
      <div className="front-cloud" />
    </div>
  );
};
export default Cloudy;
