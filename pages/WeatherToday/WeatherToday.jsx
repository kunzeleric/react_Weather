import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import WeatherService from "../../api/WeatherAPI";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import "./index.scss";

const WeatherToday = () => {
  const { place } = useParams();
  const [tempoAtual, setTempoAtual] = useState({});
  const [local, setLocal] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  async function getWeather(place) {
    const {
      data: { current, location },
    } = await WeatherService.getCurrentWeather(place);

    setTempoAtual(current);
    setLocal(location);
    setIsLoaded(true); 
  }

  useEffect(() => {
    getWeather(place);
  }, []);

  return (
    <>
      <Header />
      {isLoaded ? <WeatherCard local={local} tempoAtual={tempoAtual} /> : null}
      <Footer />
    </>
  );
};

export default WeatherToday;

//
