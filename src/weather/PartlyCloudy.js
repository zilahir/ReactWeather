import React from 'react';
import './scss/weather.scss';

const PartyCloudy = () => {
  return (
    <div className="partly-cloudy">
      <div className="sun" />
      <div className="cloud-shadow" />
      <div className="front-cloud" />
    </div>
  );
};
export default PartyCloudy;
