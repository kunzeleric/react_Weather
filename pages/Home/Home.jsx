import "./index.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchCard from "../../components/SearchCard/SearchCard";


const Home = () => {

  return (
      <>
      <Header/>
        <SearchCard />
      <Footer/>
      </>
  );
};

export default Home;
