import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sphatika from './pages/Sphatika';
import Ruminator from './pages/Ruminator';
import Ixtab from './pages/Ixtab';
import Udumbara from './pages/Udumbara';
import Okina from './pages/Okina';
import Leucrotta from './pages/Leucrotta';
import Minhocao from './pages/Minhocao';

import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sphatika" element={<Sphatika />} />
        <Route path="/ruminator" element={<Ruminator />} />
        <Route path="/ixtab" element={<Ixtab />} />
        <Route path="/udumbara" element={<Udumbara />} />
        <Route path="/okina" element={<Okina />} />
        <Route path="/leucrotta" element={<Leucrotta />} />
        <Route path="/minhocao" element={<Minhocao />} />
      </Routes>
    </div>
  );
}

export default App;
