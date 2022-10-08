import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pricing from './containers/pricing/Pricing';
import MainPage from './containers/mainPage/MainPage';
import Philosophy from './containers/philosophy/Philosophy';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/philosophy" element={<Philosophy />} />
      </Routes>
    </Router>
  );
}

export default App;
