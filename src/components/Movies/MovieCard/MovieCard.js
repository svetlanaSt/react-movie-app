import { NavLink } from 'react-router-dom';
import './movieCard.scss';

function MovieCard(props) {
    return (
        <div className='movie-card'>
            <NavLink to={`/about/${props.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${props.poster}`}></img>
                <h5>{props.title}</h5>
                <div>Rating: {props.rating}</div>
            </NavLink>
        </div>
    );
}

export default MovieCard;