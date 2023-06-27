import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

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
            <Button id={ sRank } onClick={ handleClick }>
                { sRank }
            </Button>
        </li>)
    );

    return (
        <main className="home">
           <h1 className="logo">TeamSpawn</h1>
            {
                message
                &&
                <p>{ message }</p>
            }
            <div className="home-row">
                <JoinRoom />    
                <section className="dialog">
                    <h2>New Spawn</h2>
                    <ul className="">
                        { sRankLinks }
                    </ul>
                </section> 
            </div>
        </main>
    );
}