import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function JoinRoom() {
    const [roomCode, setRoomCode] = useState('');
    const navigate = useNavigate();

    const handleChange = e => setRoomCode(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        navigate(roomCode);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="roomCode">Enter room code:</label>
                <input 
                    type="text" 
                    name="roomCode" 
                    id="roomCode" 
                    maxLength={ 4 }
                    value={ roomCode }
                    onChange={ handleChange } 
                />
            </div>
            <button>Join</button>
        </form>
    );
};