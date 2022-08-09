import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Nav';
import Country from './components/Country';
import Countries from './components/Countries';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
