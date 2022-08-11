import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Country from './components/Country';
import Countries from './components/Countries';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries />} />
          <Route path="/details/:name" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
