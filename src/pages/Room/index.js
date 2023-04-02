import { useParams } from 'react-router-dom';

export default function Room() {
    const { room } = useParams();

    return <h3>{ room }</h3>;
}