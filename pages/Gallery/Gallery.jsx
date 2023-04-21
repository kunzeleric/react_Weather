import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ImageService from "../../api/UnsplashAPI";
import "./index.scss";
import { useEffect, useState } from "react";
import ImageCard from "../../components/ImageCard/ImageCard";

const Gallery = () => {
  const { place } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchResult, setSearchResult] = useState({});

  async function getPhotos(place) {
    const {
      data: { results },
    } = await ImageService.getPictures(place);
    setSearchResult(results);
    setIsLoaded(true);
  }

  useEffect(() => {
    getPhotos(place);
  }, []);

  return (
    <>
      <Header />

      <div className="images">
        <div className="images__container">
          {isLoaded
            ? searchResult.map((result) => <ImageCard data={result} />)
            : null}
        </div>
        <div className="images__buttons">
          <Link to='/'><button className="images__buttons-btn">Go Back</button></Link>
          <Link to={`/current/${place}`}><button className="images__buttons-btn">Current Weather</button></Link>
          <Link to={`/forecast/${place}`}><button className="images__buttons-btn">Forecast</button></Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
