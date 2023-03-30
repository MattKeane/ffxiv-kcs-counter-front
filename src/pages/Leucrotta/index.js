import SpawnAttempt from '../../components/SpawnAttempt';

export default function Leucrotta() {
    const mobs = [
        {
            name: 'Allagan Chimera',
            defaultLap: 6,
        },
        {
            name: 'Meracydian Vouivre',
            defaultLap: 10,
        },
        {
            name: 'Lesser Hydra',
            defaultLap: 11,
        }
    ];

    return <SpawnAttempt mobs={ mobs } name="Leucrotta" />;
}