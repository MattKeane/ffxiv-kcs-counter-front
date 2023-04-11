import { useState } from 'react';

import { 
  Routes, 
  Route 
} from 'react-router-dom';

import Home from './pages/Home';
import Room from './pages/Room';

import './App.css';

function App() {
  const [message, setMessage] = useState('');

  return (
    <div className="app">
      <h1><a href="/">TeamSpawn</a></h1>
      <Routes>
        <Route path="/" element={<Home message={ message } />} />
        <Route path=":room" element={ <Room setMessage={ setMessage } /> } />
      </Routes>
    </div>
  );
}

export default App;
