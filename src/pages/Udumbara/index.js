import SpawnAttempt from '../../components/SpawnAttempt';

export default function Udumbara() {
    const mobs = [
        {
            name: 'Leshy',
            defaultLap: 14,
        },
        {
            name: 'Diakka',
            defaultLap: 9,
        },
    ]

    return <SpawnAttempt mobs={ mobs } name="Udumbara" />;
}