import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/login";
import Home from './components/home';
import Inventory from './components/inventory/inventory';
import Sales from './components/ventas/sales'
function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/inventory" element={<Inventory/>} />
            <Route path="/sales" element={<Sales/>} />
          </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
 