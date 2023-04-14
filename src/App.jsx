import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";

function App() {

  return (
    <div className="App" style={{position: 'relative', minHeight: '100%'}}>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
