const ForecastCard = ({data}) => {
  const newDate = new Date(Date.parse(data.date));

  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let date = `${day}/${month}/${year}`;

  return (
      <div className="forecast__container">
        <h2 className="forecast__container-date">{date}</h2>
        <img className="forecast__container-img" src={data.day.condition.icon} alt={data.day.condition.text} />
        <p className="forecast__container-detail">{data.day.condition.text}</p>
      </div>
  )
}

export default ForecastCard