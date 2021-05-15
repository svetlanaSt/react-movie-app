import { connect } from 'react-redux';
import MovieCard from './MovieCard/MovieCard';
import './movies.scss';


function SavedMovies(props) {  
    const { savedMovies} = props;
    
    return (
        <>            
            <div className='movies'>
                {savedMovies
                    .map((film, i) => <MovieCard key={i} {...film} />)}
            </div>
        </>
    );
}


const mapStateToProps = function ({ savedMovies }) {
    return {
        savedMovies: savedMovies,        
    };
};

export default connect(mapStateToProps, {})(SavedMovies);
