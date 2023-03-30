import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sphatika from './pages/Sphatika';
import Ruminator from './pages/Ruminator';
import Ixtab from './pages/Ixtab';
import Udumbara from './pages/Udumbara';
import Okina from './pages/Okina';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sphatika" element={<Sphatika />} />
        <Route path="/ruminator" element={<Ruminator />} />
        <Route path="/ixtab" element={<Ixtab />} />
        <Route path="/udumbara" element={<Udumbara />} />
        <Route path="/okina" element={<Okina />} />
      </Routes>
    </>
  );
}

export default App;
