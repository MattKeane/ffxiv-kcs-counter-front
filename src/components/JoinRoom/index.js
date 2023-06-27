import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function JoinRoom() {
    const [roomCode, setRoomCode] = useState('');
    const navigate = useNavigate();

    const handleChange = e => setRoomCode(e.target.value);

    const handleSubmit = e => {
        navigate(roomCode.toLowerCase());
    }

    return (
        <>
            <div className="dialog">
                <h2>Continue Spawn</h2>            
                <div style={{ marginBottom: ".5rem" }}>
                    <TextField
                        label="Room Code"
                        name="roomCode"
                        id="roomCode"
                        value={ roomCode }
                        onChange={ handleChange }
                        variant="standard"
                    />
                </div>
                <Button 
                    id="joinRoomBtn"
                    onClick={ handleSubmit }
                >
                    Join
                </Button>
            </div>
        </>
    );
};