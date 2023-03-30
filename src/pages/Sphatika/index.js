import SpawnAttempt from '../../components/SpawnAttempt';

export default function Sphatika() {
    const mobs = [
        {
            name: 'Asvattha',
            defaultLap: 11,
        },
        {
            name: 'Vajralangula',
            defaultLap: 12,
        },
        {
            name: 'Pisaca',
            defaultLap: 11,
        },
    ];

    return <SpawnAttempt mobs={ mobs } name="Sphatika" />;
}