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
import Loading from '../../components/Loading';
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
        <main className="room">      
            <h1><Link to="/" className="logo">TeamSpawn</Link></h1>
        {
            loading
            ?
            <Loading />
            :
            <SpawnAttempt name={ sRank } mobs={ mobs } room={ room } />
        }
        </main>
    );
}