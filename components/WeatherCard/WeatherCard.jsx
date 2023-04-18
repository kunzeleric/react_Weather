import "./index.scss";
import arrow from '../../src/assets/imgs/arrows.svg';
import { Link } from "react-router-dom";

const WeatherCard = ({ local, tempoAtual }) => {
  
  async function goBack() {
    const containerCard = document.querySelector(".card");
    const container = document.querySelector(".main__container");

    containerCard.classList.toggle("hidden");
    container.classList.remove("hidden");
    }

  return (
    <div className="card">
      <button className="card__arrow"><img onClick={goBack} src={arrow} alt="" /></button>
      <div className="card__container">
        <h2 className="card__container-location">
          {local.name}, located in {local.country}.
        </h2>
        <img src={tempoAtual.condition.icon} alt={tempoAtual.condition.text} />

        <div className="card__container-weather">
          <div className="card__container-weather-sec">
            <p>Current Temperature</p>
            <span>{tempoAtual.temp_c}ºC</span>
          </div>
          <div className="card__container-weather-sec">
            <p>Weather Condition</p>
            <span>{tempoAtual.condition.text}</span>
          </div>
        </div>
        <div className="card__container-others">
          <div className="card__container-others-sec">
            <p>Wind Speed (km/h)</p>
            <span>{tempoAtual.wind_kph}</span>
          </div>
          <div className="card__container-others-sec">
            <p>Precipiation (mm)</p>
            <span>{tempoAtual.precip_mm}</span>
          </div>
          <div className="card__container-others-sec">
            <p>Wind Speed (km/h)</p>
            <span>{tempoAtual.humidity}</span>
          </div>
        </div>
      </div>
      <div className="card__buttons">
        <Link to={`/forecast/${local.name}`}><button>Forecast</button></Link>
        <button>Photo Gallery</button>
      </div>
    </div>
  );
};

export default WeatherCard;
