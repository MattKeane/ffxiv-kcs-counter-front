import { createRoom } from '../../utilities/rooms-service';
import './style.css';

export default function Home() {
    const sRanks = [
        'Sphatika',
        'Ruminator',
        'Ixtab',
        'Udumbara',
        'Okina',
        'Leucrotta',
        'Minhocao',
    ];

    const handleClick = e => {
        createRoom({sRank: e.target.id});
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