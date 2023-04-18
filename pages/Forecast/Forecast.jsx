import { useParams } from "react-router-dom";
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
            <h1>{location}</h1>
            {
            weatherForecast.map((day, index) => (
                <div key={index} className="forecast__card">
                    <ForecastCard data={day} />
                </div>
            ))
            }
        </div>

      <Footer />
    </>
  );
};

export default Forecast;
