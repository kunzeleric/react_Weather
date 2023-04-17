import "./index.scss";

const Card = ({ local, tempoAtual }) => {
  return (
    <div className="card">
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
      <div className="buttons">
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default Card;
