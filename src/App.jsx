import { Route, Routes } from "react-router-dom";
import Forecast from "../pages/Forecast/Forecast";
import Home from "../pages/Home/Home";
import WeatherToday from "../pages/WeatherToday/WeatherToday";
import Gallery from "../pages/Gallery/Gallery";

function App() {

  return (
    <div className="App" style={{position: 'relative', minHeight: '100%'}}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/current/:place' element={<WeatherToday/>}></Route>
        <Route path='/forecast/:place' element={<Forecast/>}></Route>
        <Route path='/gallery/:place' element={<Gallery/>}></Route>
      </Routes>
    </div>
  )
}

export default App
