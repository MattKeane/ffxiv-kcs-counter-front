import MobCounter from '../MobCounter';

import './style.css';

export default function SpawnAttempt({ name, mobs }) {
    // reusable component to display all mobs in a single spawn attempt
    // name prop is the name of the S rank to be spawned
    // mobs prop is an array of objects representing each mob required for the spawn

    const mobCounters = mobs.map(mob => (
        <MobCounter 
            name={ mob.name } 
            defaultLap={ mob.defaultLap }
        />)
    );

    return (
        <>
            <h2>{ name }</h2>
            <div>
                { mobCounters }
            </div>
        </>
    );
}