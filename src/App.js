import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Room from './pages/Room';

import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":room" element={ <Room /> } />
      </Routes>
    </div>
  );
}

export default App;
