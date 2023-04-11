import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Button,
    TextField,
} from '@mui/material';

export default function JoinRoom() {
    const [roomCode, setRoomCode] = useState('');
    const navigate = useNavigate();

    const handleChange = e => setRoomCode(e.target.value);

    const handleSubmit = e => {
        navigate(roomCode.toLowerCase());
    }

    return (
        <>
            <h2>Join a Spawn Attempt in Progress</h2>
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
                variant="contained"
                onClick={ handleSubmit }
            >
                Join
            </Button>
        </>
    );
};