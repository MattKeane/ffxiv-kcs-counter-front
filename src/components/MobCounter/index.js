import { 
    useState,
    useEffect, 
} from 'react';
import Card from '@mui/material/Card';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { 
    incrementMob,
    registerUpdateListener, 
} from '../../utilities/socket-service';

import './style.css';

export default function MobCounter({ name, defaultLap, room, startingCount, maxCount }) {
    // component for counting kills of an individual mob
    // name prop specifies the name prop
    // defaultLap prop specifies how many mobs lap

    const [count, setCount] = useState(startingCount);
    const [lapCount, setLapCount] = useState(defaultLap);

    useEffect(() => {
        return registerUpdateListener(name, setCount);
    }, [name]);

    const addOne = e => {
        // increments the number of mobs killed by one
        e.preventDefault();
        if (count + 1 <= maxCount) {
            incrementMob(room, name, 1);
            setCount(count => count + 1);
        }
    };

    const subtractOne = e => {
        // decrements the number of mobs killed by one
        e.preventDefault();
        if (count - 1 >= 0) {
            incrementMob(room, name, -1);
            setCount(count => count -1);
        }
    };

    const addLap = e => {
        // increments the number of mobs killed by the amount in a lap
        e.preventDefault();
        if (count + lapCount <= maxCount) {
            incrementMob(room, name, lapCount);
            setCount(count => count + lapCount);
        } else {
            incrementMob(room, name, maxCount - count);
            setCount(maxCount);
        }
    };

    const subtractLap = e => {
        // decrements the number of mobs killed by the amount in a lap
        e.preventDefault();
        if (count - lapCount >= 0) {
            incrementMob(room, name, -lapCount);
            setCount(count => count - lapCount);
        } else {
            incrementMob(room, name, -count);
            setCount(0);
        }
    };

    const handleLapCountChange = e => {
        // changes the number of mobs in each lap
        const newCount = parseInt(e.target.value);
        if (newCount) {
            setLapCount(newCount);
        } else {
            setLapCount(0);
        }
    };

    const countStyle = count === maxCount ? { color: "#11FF11" } : { color: "white" };

    return (
        <Card variant="outlined" sx={{ display: "inline-block", margin: 2 }} className="dialog">
            <h3>{ name }</h3>
            <p style={ countStyle }>{ count } / { maxCount }</p>
            <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
            <ButtonGroup 
                orientation="vertical" 
                variant="contained"
                size="large"
            >
                <Button onClick={ addOne }>
                    +1
                </Button>
                <Button onClick={ subtractOne }>
                    -1
                </Button>
            </ButtonGroup>
            <ButtonGroup 
                orientation="vertical"
                variant="contained"
                size="large"
            >
                <Button onClick={ addLap }>
                    +{ lapCount }
                </Button>
                <Button onClick={ subtractLap }>
                    -{ lapCount }
                </Button>
            </ButtonGroup>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', margin: 1, padding: 10 }}>
                <TextField
                    className="text-input"
                    label="Mobs per Lap"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]* '}}
                    value={ lapCount }
                    onChange={ handleLapCountChange }
                    variant="filled"
                    size="small"
                />
            </div>
        </Card>
    )
}