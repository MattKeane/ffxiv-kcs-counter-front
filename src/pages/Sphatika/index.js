import MobCounter from '../../components/MobCounter';

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

    const mobCounters = mobs.map(mob => (
        <MobCounter 
            name={ mob.name } 
            defaultLap={ mob.defaultLap }
        />)
    );

    return (
        <>
            <h2>Sphatika</h2>
            { mobCounters }
        </>
    );
}