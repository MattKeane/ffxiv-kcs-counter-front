import {
    useRef,
    useEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

export default function Room() {
    const socket = useRef(null);
    const { room } = useParams();
    
    useEffect(() => {
        socket.current = io('/spawn');
        socket.current.emit('joinRoom', room, res => {
            console.log(res);
        });
    }, [room])

    return <h3>{ room }</h3>;
}