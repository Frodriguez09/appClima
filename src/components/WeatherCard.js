import React from 'react';
import { FaCloud, FaSun, FaSnowflake, FaCloudRain } from 'react-icons/fa';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/weatherCard.css';

const WeatherCard = ({ city, weather, temp }) => {
  const getWeatherIcon = () => {
    switch (weather) {
      case 'Clouds':
        return <FaCloud />;
      case 'Clear':
        return <FaSun />;
      case 'Snow':
        return <FaSnowflake />;
      case 'Rain':
        return <FaCloudRain />;
      default:
        return <FaSun />;
    }
  };

  return (
  <div className="col-lg-12 text-center col-sm-12 card my-3">
    <div className='row'>
        <div className='col-6 card-body'>
            <h2 className='city text-center card-title text-primary'>{city}</h2>
        </div>
        <div className='col-6 card-text'>
          <div className='row'>
            <div className='col-6'>
            <div className="weather-icon text-warning">{getWeatherIcon()}</div>
            </div>
            <div className='col-6'>
            <div className="temp text-warning">{temp}°C</div>
            </div>
          </div>
        </div>
    </div>
  </div>
);
};

export default WeatherCard;