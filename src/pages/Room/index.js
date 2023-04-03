import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { joinRoom } from '../../utilities/socket-service';

export default function Room() {
    const { room } = useParams();
    
    useEffect(() => {
        joinRoom(room, console.log);
    }, [room])

    return <h3>{ room }</h3>;
}