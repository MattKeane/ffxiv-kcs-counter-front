import { useState } from 'react';

export default function MobCounter({ name, defaultLap }) {
    const [count, setCount] = useState(0);
    const [lapCount, setLapCount] = useState(defaultLap);

    const addOne = e => {
        e.preventDefault();
        setCount(count => count + 1);
    };

    const subtractOne = e => {
        e.preventDefault();
        setCount(count => count - 1 < 0 ? 0 : count -1);
    };

    const addLap = e => {
        e.preventDefault();
        setCount(count => count + lapCount);
    };

    const subtractLap = e => {
        e.preventDefault();
        setCount(count => count - lapCount < 0 ? 0: count - lapCount);
    };

    const handleLapCountChange = e => setLapCount(parseInt(e.target.value));

    return (
        <form>
            <h3>{ name }</h3>
            <p>{ count }</p>
            <div>
                <button onClick={ addOne }>
                    +1
                </button>
                <button onClick={ subtractOne }>
                    -1
                </button>
            </div>
            <div>
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