import { useEffect } from 'react';
import Pagination from '../Pagination/Pagination';
import MovieCard from './MovieCard/MovieCard';
import './movies.scss';
import Sorting from './Sorting/Sorting';

function Movies(props) {
   
    const {movies} = props;

    return (
        <>
            <Sorting />
            <div className='movies'>
                {movies
                    .map((film, i) => <MovieCard key={i} {...film} />)}
            </div>
            <Pagination />
        </>
    );
}


export default Movies;