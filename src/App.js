import { useState } from 'react';

import { 
  Routes, 
  Route 
} from 'react-router-dom';

import Backdrop from '@mui/material/Backdrop';

import Home from './pages/Home';
import Room from './pages/Room';

import InfoButton from './components/InfoButton';
import InfoModal from './components/InfoModal';

import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home message={ message } />} />
        <Route path=":room" element={ <Room setMessage={ setMessage } /> } />
      </Routes>
      <InfoButton onClick={ handleOpen }/>
      <Backdrop
        open={ showModal }
        onClick={ handleClose }
      >
        <InfoModal />
      </Backdrop>
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
