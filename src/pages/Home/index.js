import { useNavigate } from 'react-router-dom';

import { createRoom } from '../../utilities/rooms-service';
import './style.css';

export default function Home() {
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
            <h2>Select an S Rank to Attempt</h2>
            <ul>
                { sRankLinks }
            </ul>
        </>
    );
}