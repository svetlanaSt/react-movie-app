import Pagination from '../Pagination/Pagination';
import MovieCard from './MovieCard/MovieCard';
import './movies.scss';
import Sorting from './Sorting/Sorting';

function Movies(props) {
    return (
        <>
            <Sorting />
            <div className='movies'>
                {props.movies
                    .map((film) => <MovieCard key={film.id} title={film.title}
                        poster={film.poster_path} rating={film.vote_average} id={film.id} />)}
            </div>
            <Pagination />
        </>
    );
}


export default Movies;