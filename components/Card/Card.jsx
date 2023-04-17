import "./index.scss";
import arrow from '../../src/assets/imgs/arrows.svg';

const Card = ({ local, tempoAtual }) => {

  async function goBack() {
    const containerButton = document.querySelector(".card");
    const container = document.querySelector(".main__container");

    containerButton.classList.toggle("hidden");
    container.classList.toggle("hidden");
    }

  return (
    <div className="card">
      <button className="card__arrow" onClick={goBack}><img src={arrow} alt="" /></button>
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
        <button>Forecast</button>
        <button>Photo Gallery</button>
      </div>
    </div>
  );
};

export default Card;
