import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { fetchedFilmInfo } from '../../../redux/reducer';
import './aboutFilm.scss';

function AboutFilm(props) {
   const { id } = useParams();
  
    useEffect(() => {        
        props.fetchedFilmInfo(id);
    }, []);
    
    return (
        <div className='about-film'>
            <div className='poster'>
                <img src={`https://image.tmdb.org/t/p/w500/${props.filmInfo.backdrop_path}`}/>
            </div>
            <div className='about'>
                <h1>{props.filmInfo.original_title}</h1>
                <h2>Description:</h2><p> {props.filmInfo.overview}</p>
                <h2>Rating: {props.filmInfo.vote_average}</h2>
                <h2>Budget: {props.filmInfo.budget}$</h2>
            </div>
        </div>
    );
}

const mapStateToProps = function (state) {
    return {
        filmInfo: state.filmInfo
    };
}


export default connect(mapStateToProps, {fetchedFilmInfo})(AboutFilm);