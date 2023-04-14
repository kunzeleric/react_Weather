import './index.scss';
import WeatherService from '../../api/WeatherAPI';
import { useState } from 'react';

const Home = () => {

  

  return (
    <main className="main">
      <div className="main__container">
        <h2 className="main__container-title">Search for the weather of any place around the globe!</h2>
        <form className="main__container-form">
          <label htmlFor="location">Type in the location below</label>
          <input id="location" type="text" placeholder="Location goes here" />
          <button type="submit">Search!</button>
        </form>
      </div>
    </main>
  )
}

export default Home