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
        });
    });
};

export function incrementMob(room, mob, amount) {
    socket.emit('increment', room, mob, amount);
};

export function registerUpdateListener(mob, handler) {
    socket.on(`update:${mob}`, updatedTotal => handler(updatedTotal));
    const removeUpdateListener = () => {
        socket.off(`update:${mob}`, handler);
    };
    return removeUpdateListener;
};