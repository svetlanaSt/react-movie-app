import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToSaved, deleteFromSaved, toggleIsSaved } from '../../../redux/reducers/reducer';
import './movieCard.scss';

function MovieCard(props) {
    const { id, poster_path, title, vote_average,
        saved, addToSaved, toggleIsSaved, isSavedId, deleteFromSaved } = props;

    const saveFilm = (obj) => {
        addToSaved(obj);
        toggleIsSaved(obj.id);        
    };

    const deleteFilm = (id) => {            
        deleteFromSaved(id);
        toggleIsSaved(id);       
    };

    return (
        <div className='movie-card'>
            <NavLink to={`/about/${id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}></img>
                <h5>{title}</h5>
                <div>Rating: {vote_average}</div>
            </NavLink>
            {!saved ?
                <button disabled={isSavedId.some((filmId) => filmId === id)} onClick={() => saveFilm(props)}>Save</button>
                : <button onClick={() => deleteFilm(id)}>Delete</button>
            }
        </div>
    );
}

const mapStateToProps = function ({ isSavedId }) {
    return {
        isSavedId: isSavedId
    };
};

export default connect(mapStateToProps, { addToSaved, toggleIsSaved, deleteFromSaved})(MovieCard);