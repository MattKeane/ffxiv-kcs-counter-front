import { Link } from 'react-router-dom';
import './style.css';

export default function Home() {
    const sRanks = [
        {
            name: 'Sphatika',
            link: '/sphatika',
        },
        {
            name: 'Ruminator',
            link: '/ruminator',
        },
        {
            name: 'Ixtab',
            link: '/ixtab',
        },
        {
            name: 'Okina',
            link: '/okina',
        },
        {
            name: 'Leucrotta',
            link: '/leucrotta',
        },
        {
            name: 'Minhocao',
            link: '/minhocao',
        },
    ];

    const sRankLinks = sRanks.map(sRank => (
        <li>
            <Link to={ sRank.link }>
                { sRank.name }
            </Link>
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