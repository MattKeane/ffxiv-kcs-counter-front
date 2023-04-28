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
      <Routes>
        <Route path="/" element={<Home message={ message } />} />
        <Route path=":room" element={ <Room setMessage={ setMessage } /> } />
      </Routes>
      <footer>
      <div>
        <small>FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
        </small>
      </div>
      <div>
        <small>Background image © SQUARE ENIX CO., LTD. All Rights Reserved.</small>
      </div>
    </footer>
    </div>
  );
}

export default App;
