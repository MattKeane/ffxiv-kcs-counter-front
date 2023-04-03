import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { joinRoom } from '../../utilities/socket-service';
import SpawnAttempt from '../../components/SpawnAttempt';

export default function Room() {
    const [sRank, setSRank] = useState(null);
    const [mobs, setMobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const { room } = useParams();
    
    useEffect(() => {
        joinRoom(room)
            .then(res => {
                setSRank(res.name);
                setMobs(res.mobs);
                setLoading(false);
            })
            .catch(console.log);
    }, [room]);

    return (
        <>
        {
            loading
            ?
            <p>Loading...</p>
            :
            <SpawnAttempt name={ sRank } mobs={ mobs } />
        }
        </>
    );
}