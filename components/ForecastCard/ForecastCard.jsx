import "./index.scss";

const ForecastCard = ({ data }) => {
  const newDate = new Date(Date.parse(data.date));

  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let date = `${day}/${month}/${year}`;

  console.log(data);
  return (
    <div className="card-forecast">
      <h2 className="card-forecast__date">{date}</h2>

      <div className="card-forecast__condition">
        <img
          className="card-forecast__condition-img"
          src={data.day.condition.icon}
          alt={data.day.condition.text}
        />
        <p className="card-forecast__condition-description">
          {data.day.condition.text}
        </p>
      </div>

      <div className="card-forecast__temp">
        <div className="card-forecast__temp-container">
          <p>Min.</p>
          <span>{Math.floor(data.day.mintemp_c)}ºC</span>
        </div>
        <div className="card-forecast__temp-container">
          <p>Max</p>
          <span>{Math.floor(data.day.maxtemp_c)}ºC</span>
        </div>
      </div>

      <div className="card-forecast__rain">
        <div className="card-forecast__rain-precipitation">
          {data.day.daily_chance_of_rain}%
        </div>
        <div className="card-forecast__rain-humidity">{data.day.avghumidity}%</div>
      </div>
    </div>
  );
};

export default ForecastCard;
