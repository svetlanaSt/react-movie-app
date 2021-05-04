import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import {  fetchedMovies } from '../../redux/reducer';
import { getFilterMovies, getIsError, getIsFetching, getPageNumber, getSortBy, getSortMovies } from '../../redux/selectors';
import Preloader from '../common/Preloader';
import Movies from './Movies';
import './movies.scss';


function MoviesContainer(props) {

    useEffect(() => {
        console.log(props.pageNumber);
        props.fetchedMovies( props.pageNumber);
    }, [props.sortBy, props.pageNumber]);

    if (props.isError) {
        return <Redirect to="/error"/>
    }

    return (
        <>
            {props.isFetching &&
                <Preloader />}
            <Movies {...props} />
        </>
    );
}


const mapStateToProps = function ({ allMovies, searchValue, sortBy, currentPage, isFetching, isFetchError }) {
    return {
        movies: getFilterMovies(allMovies, searchValue, sortBy),
        pageNumber: getPageNumber(currentPage),
        isFetching: getIsFetching(isFetching),
        sortBy: getSortBy(sortBy),
        isError: getIsError(isFetchError)
    };
}

export default connect(mapStateToProps, {  fetchedMovies })(MoviesContainer);
