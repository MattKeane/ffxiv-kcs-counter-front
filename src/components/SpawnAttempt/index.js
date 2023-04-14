import MobCounter from '../MobCounter';

import './style.css';

export default function SpawnAttempt({ name, mobs, room }) {
    // reusable component to display all mobs in a single spawn attempt
    // name prop is the name of the S rank to be spawned
    // mobs prop is an array of objects representing each mob required for the spawn

    const defaultLaps = {
        Asvattha: 11,
        Vajralangula: 12,
        Pisaca: 11,
        Thinker: 9,
        Wanderer: 15,
        Weeper: 8,
        'Cracked Ronkan Doll': 12,
        'Cracked Ronkan Thorn': 11,
        'Cracked Ronkan Vessel': 9,
        Leshy: 14,
        Diakka: 9,
        Yumemi: 3,
        'Naked Yumemi': 3,
        'Allagan Chimera': 6,
        'Meracydian Vouivre': 10,
        'Lesser Hydra': 11,
        'Earth Sprite': 14,
    };

    const mobCounters = mobs.map((mob, i) => (
        <MobCounter 
            key={ i }
            name={ mob.name } 
            defaultLap={ defaultLaps[mob.name] }
            startingCount={ mob.count }
            room={ room }
        />)
    );

    return (
        <>
            <h2 className="spawn-name">{ name }</h2>
            <div>
                { mobCounters }
            </div>
        </>
    );
}