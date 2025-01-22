import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./components/login";
function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
          </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
 