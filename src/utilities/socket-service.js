import { io } from 'socket.io-client';

const socket = io('/spawn');

export function joinRoom(room) {
    return new Promise((resolve, reject) => {
        socket.emit('joinRoom', room, response => {
            if (response.status === 'ok') {
                resolve(response.sRank);
            } else {
                reject(response.error);
            }
        })
    });
}