import { useNavigate } from 'react-router-dom';

import JoinRoom from '../../components/JoinRoom';
import { createRoom } from '../../utilities/rooms-service';
import './style.css';

export default function Home({ message }) {
    const navigate = useNavigate();

    const sRanks = [
        'Sphatika',
        'Ruminator',
        'Ixtab',
        'Udumbara',
        'Okina',
        'Leucrotta',
        'Minhocao',
    ];

    const handleClick = async e => {
        const { room } = await createRoom(e.target.id);
        navigate(`/${room}`)
    };

    const sRankLinks = sRanks.map((sRank, i) => (
        <li key={ i }>
            <button id={ sRank } onClick={ handleClick }>
                { sRank }
            </button>
        </li>)
    );

    return (
        <>
            {
                message
                &&
                <p>{ message }</p>
            }
            <h2>Join a Spawn Attempt in Progress</h2>
            <JoinRoom />        
            <h2>Start New Spawn Attempt</h2>
            <ul>
                { sRankLinks }
            </ul>
        </>
    );
}