import React, { useState } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import WeatherService from '../../api/WeatherAPI';

const SearchCard = () => {
  const [isCardVisible, setCardVisible] = useState(false);
  const [local, setLocal] = useState({});
  const [tempoAtual, setTempoAtual] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  async function handleClick() {
    const searchValue = document.getElementById("location");
    const container = document.querySelector(".main__container");
    const containerCard = document.querySelector(".card");

    if (searchValue.value) {
      container.classList.toggle("hidden");
      const {
        data: { current, location },
      } = await WeatherService.getCurrentWeather(searchValue.value);

      setLocal(location);
      setTempoAtual(current);
      setCardVisible(true);

      if (isCardVisible) {
        containerCard.classList.toggle("hidden");
      }
    } else {
      alert("Please input a location.");
    }
  }
  return (
    <main className="main">
      <div className="main__container">
        <h2 className="main__container-title">
          Search for the weather of any place around the globe!
        </h2>
        <form onSubmit={handleSubmit} className="main__container-form">
          <label htmlFor="location">Type in the location below</label>
          <input id="location" type="text" placeholder="Location goes here" />
          <button onClick={handleClick} type="submit">
            Search!
          </button>
        </form>
      </div>
      {isCardVisible ? (
        <WeatherCard local={local} tempoAtual={tempoAtual} />
      ) : null}
    </main>
  );
};

export default SearchCard;
