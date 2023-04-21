import React, { useState } from "react";
import { Link } from "react-router-dom";
import './index.scss';

const SearchCard = () => {

  let [local, setLocal] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInput = () => {
    let searchValue = document.getElementById('location');
    setLocal(searchValue.value);
  }

  return (
    <section className="main">
      <div className="main__container">
        <h2 className="main__container-title">
          Search for the weather of any place around the globe!
        </h2>
        <form onSubmit={handleSubmit} className="main__container-form">
          <label htmlFor="location">Type in the location below</label>
          <input onKeyUp={handleInput} id="location" type="text" placeholder="Location goes here" />
          <Link to={`/current/${local}`}>
            <button type="submit">Search!</button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default SearchCard;
