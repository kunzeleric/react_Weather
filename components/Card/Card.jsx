import "./index.scss";

const Card = ({ local, tempoAtual }) => {
  return (
    <div className="card">
      <div className="card__container">
          <h2 className="card__container-location">{local.name} located in {local.country}.</h2>
          <h3>Weather Actual Condition</h3>
          <img src={tempoAtual.condition.icon} alt={tempoAtual.condition.text} />
        <div className="card__container-weather">
          <p>Current Temperature</p>
          <span>{tempoAtual.temp_c}ºC</span>

          <p>Weather Condition</p>
          <span>{tempoAtual.condition.text}</span>
        </div>
        <div className="card__container-others">
          <p>Wind Speed (km/h)</p>
          <span>{tempoAtual.wind_kph}</span>
          <p>Precipiation (mm)</p>
          <span>{tempoAtual.precip_mm}</span>
          <p>Wind Speed (km/h)</p>
          <span>{tempoAtual.humidity}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
