import { useState } from 'react';
import { incrementMob } from '../../utilities/socket-service';

import './style.css';

export default function MobCounter({ name, defaultLap, room }) {
    // component for counting kills of an individual mob
    // name prop specifies the name prop
    // defaultLap prop specifies how many mobs lap

    const [count, setCount] = useState(0);
    const [lapCount, setLapCount] = useState(defaultLap);

    const addOne = e => {
        // increments the number of mobs killed by one
        e.preventDefault();
        incrementMob(room, name, 1);
        setCount(count => count + 1);
    };

    const subtractOne = e => {
        // decrements the number of mobs killed by one
        e.preventDefault();
        setCount(count => count - 1 < 0 ? 0 : count -1);
    };

    const addLap = e => {
        // increments the number of mobs killed by the amount in a lap
        e.preventDefault();
        setCount(count => count + lapCount);
    };

    const subtractLap = e => {
        // decrements the number of mobs killed by the amount in a lap
        e.preventDefault();
        setCount(count => count - lapCount < 0 ? 0: count - lapCount);
    };

    const handleLapCountChange = e => setLapCount(parseInt(e.target.value));
    // changes the number of mobs in each lap

    return (
        <form>
            <h3>{ name }</h3>
            <p>{ count } / 100</p>
            <div className="buttonContainer">
                <button onClick={ addOne }>
                    +1
                </button>
                <button onClick={ subtractOne }>
                    -1
                </button>
            </div>
            <div className="buttonContainer">
                <button onClick={ addLap }>
                    +{ lapCount }
                </button>
                <button onClick={ subtractLap }>
                    -{ lapCount }
                </button>
            </div>
            <div>
                <label htmlFor="lapCount">Mobs per lap:</label>
                <input 
                    type="number" 
                    value={ lapCount } 
                    onChange={ handleLapCountChange }
                    min={ 0 } 
                />
            </div>
        </form>
    )
}