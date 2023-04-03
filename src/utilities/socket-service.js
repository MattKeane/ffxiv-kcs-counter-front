import { io } from 'socket.io-client';

const socket = io('/spawn');

export function joinRoom(room, handler) {
    socket.emit('joinRoom', room, handler);
}