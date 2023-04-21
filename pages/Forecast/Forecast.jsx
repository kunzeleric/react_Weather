import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./index.scss";
import ForecastCard from "../../components/ForecastCard/ForecastCard";
import { useEffect, useState } from "react";
import WeatherService from "../../api/WeatherAPI";

const Forecast = () => {
  const { location } = useParams();

  const [weatherForecast, setWeatherForecast] = useState([]);

  async function getForecast(location) {
    const {
      data: {
        forecast: { forecastday },
      },
    } = await WeatherService.getForecastWeather(location);
    setWeatherForecast(forecastday);
  }

  useEffect(() => {
    getForecast(location);
  }, []);

  return (
    <>
      <Header />
      <div className="forecast">
        <div className="forecast__container">
          <h1 className="forecast__container-city">{location}</h1>
          <div className="forecast__container-cards">
            {weatherForecast.map((day) => (
              <ForecastCard data={day} />
            ))}
          </div>
        </div>
        <div className="forecast__buttons">
            <Link to='/'><button className="forecast__buttons-btn">Go Back</button></Link>
            <button className="forecast__buttons-btn">Gallery</button>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Forecast;
