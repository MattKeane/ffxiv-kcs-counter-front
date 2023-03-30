import SpawnAttempt from '../../components/SpawnAttempt';

export default function Minhocao() {
    const mobs = [
        {
            name: 'Earth Sprites',
            defaultLap: 14,
        }
    ];

    return <SpawnAttempt mobs={ mobs } name="Minhocao" />;
}