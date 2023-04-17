import "./index.scss";
import { useState } from "react";
import Card from "../../components/Card/Card";
import WeatherService from "../../api/WeatherAPI";


const Home = () => {

  const [isCardVisible, setCardVisible] = useState(false);
  const [local, setLocal] = useState({});
  const [tempoAtual, setTempoAtual] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();

    const searchValue = event.target[0].value;
    const container = document.querySelector(".main__container");

    if (searchValue) {
        container.classList.toggle("hidden");
        const { data: { current, location } } = await WeatherService.getCurrentWeather(searchValue);

        setLocal(location)
        setTempoAtual(current);
        setCardVisible(true);
        event.target[0].value = "";
    }

    else {
        alert('Please input a location.');
    }
};

  return (
    <main className="main">
      <div className="main__container">
        <h2 className="main__container-title">
          Search for the weather of any place around the globe!
        </h2>
        <form onSubmit={handleSubmit} className="main__container-form">
          <label htmlFor="location">Type in the location below</label>
          <input
            id="location"
            type="text"
            placeholder="Location goes here"
          />
          <button type="submit">Search!</button>
        </form>
      </div>
        {
          isCardVisible ? <Card local={local} tempoAtual={tempoAtual}/> : null
        }
    </main>
  );
};

export default Home;
