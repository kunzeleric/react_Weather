import { Route, Routes } from "react-router-dom";
import Forecast from "../pages/Forecast/Forecast";
import Home from "../pages/Home/Home";

function App() {

  return (
    <div className="App" style={{position: 'relative', minHeight: '100%'}}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/forecast' element={<Forecast/>}></Route>
        <Route path='/gallery/:location' ></Route>
      </Routes>
    </div>
  )
}

export default App
