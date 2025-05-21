import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MultipleButtons from './MultiButton';
import Address from './api/Address';
import MovieApi from './api/Movie';
import MapContainer, { KakaoMap } from './api/Map';

function App() {
  return (
    <div className="App" style={{ marginTop:"20px" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MultipleButtons /> } />
          <Route path="/address" element={ <Address /> } />
          <Route path="/movie" element={ <MovieApi /> } />
          <Route path="/map" element={ <MapContainer /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
