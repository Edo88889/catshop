import './App.css';
import Index from "./Components/Cat";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Favourites from "./Components/Home/Favourites";
import Cart from "./Components/Home/Cart";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index/>} />
                <Route path='/favourites' element={<Favourites/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
