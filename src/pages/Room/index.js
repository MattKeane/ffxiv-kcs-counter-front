import { 
    useEffect, 
    useState 
} from 'react';
import { 
    useParams,
    useNavigate,
    Link
} from 'react-router-dom';
import { joinRoom } from '../../utilities/socket-service';
import SpawnAttempt from '../../components/SpawnAttempt';

export default function Room({ setMessage }) {
    const navigate = useNavigate();
    const [sRank, setSRank] = useState(null);
    const [mobs, setMobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const { room } = useParams();
    
    useEffect(() => {
        setMessage('');
        joinRoom(room)
            .then(res => {
                setSRank(res.name);
                setMobs(res.mobs);
                setLoading(false);
            })
            .catch(err => {
                setMessage(err);
                navigate('/');
            });
    }, [room, setMessage, navigate]);

    return (
        <>
           <h1><Link to="/">TeamSpawn</Link></h1>
        {
            loading
            ?
            <p>Loading...</p>
            :
            <SpawnAttempt name={ sRank } mobs={ mobs } room={ room } />
        }
        </>
    );
}