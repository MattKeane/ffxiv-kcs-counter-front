import SpawnAttempt from '../../components/SpawnAttempt';

export default function Ixtab() {
    const mobs = [
        {
            name: 'Cracked Ronkan Doll',
            defaultLap: 12,
        },
        {
            name: 'Cracked Ronkan Thorn',
            defaultLap: 11,
        },
        {
            name: 'Cracked Ronkan Vessel',
            defaultLap: 12,
        },
    ];

    return <SpawnAttempt mobs={ mobs } name="Ixtab" />;
}