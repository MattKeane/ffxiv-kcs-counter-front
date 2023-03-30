import SpawnAttempt from '../../components/SpawnAttempt';

export default function Ruminator() {
    const mobs = [
        {
            name: 'Thinker',
            defaultLap: 9,
        },
        {
            name: 'Wanderer',
            defaultLap: 15,
        },
        {
            name: 'Weeper',
            defaultLap: 8,
        },
    ];

    return <SpawnAttempt mobs={ mobs } name="Ruminator" />;
}