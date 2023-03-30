import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sphatika from './pages/Sphatika';
import Ruminator from './pages/Ruminator';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sphatika" element={<Sphatika />} />
        <Route path="/ruminator" element={<Ruminator />} />
      </Routes>
    </>
  );
}

export default App;
