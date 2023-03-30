import MobCounter from '../MobCounter';

export default function SpawnAttempt({ name, mobs }) {
    const mobCounters = mobs.map(mob => (
        <MobCounter 
            name={ mob.name } 
            defaultLap={ mob.defaultLap }
        />)
    );

    return (
        <>
            <h2>{ name }</h2>
            { mobCounters }
        </>
    );
}