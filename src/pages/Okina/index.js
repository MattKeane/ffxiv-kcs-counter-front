import SpawnAttempt from '../../components/SpawnAttempt';

export default function Okina() {
    const mobs = [
        {
            name: 'Yumemi',
            defaultLap: 0,
        },
        {
            name: 'Naked Yumemi',
            defaultLap: 0,
        },
    ];

    return <SpawnAttempt mobs={ mobs } name="Okina" />;
}