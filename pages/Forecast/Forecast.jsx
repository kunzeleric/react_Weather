import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./index.scss";
import ForecastCard from "../../components/ForecastCard/ForecastCard";
import { useEffect, useState } from "react";
import WeatherService from "../../api/WeatherAPI";

const Forecast = () => {
  const { place } = useParams();

  const [weatherForecast, setWeatherForecast] = useState([]);

  async function getForecast(place) {
    const {
      data: {
        forecast: { forecastday },
      },
    } = await WeatherService.getForecastWeather(place);
    setWeatherForecast(forecastday);
  }

  useEffect(() => {
    getForecast(place);
  }, []);

  return (
    <>
      <Header />
      <div className="forecast">
        <div className="forecast__container">
          <h1 className="forecast__container-city">{place}</h1>
          <div className="forecast__container-cards">
            {weatherForecast.map((day) => (
              <ForecastCard data={day} />
            ))}
          </div>
        </div>
        <div className="forecast__buttons">
            <Link to='/'><button className="forecast__buttons-btn">Go Back</button></Link>
            <Link to={`/current/${place}`}><button className="forecast__buttons-btn">Current Weather</button></Link>
            <Link to={`/gallery/${place}`}><button className="forecast__buttons-btn">Gallery</button></Link>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Forecast;
