export const FETCHED_MOVIES = 'FETCHED_MOVIES';
export const FETCHED_FILM_INFO = 'FETCHED_FILM_INFO';
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_FILM_INFO = 'SET_FILM_INFO';
const SET_SORT_NAME = 'SET_SORT_NAME';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const SET_MOVIES = 'SET_MOVIES';
const SET_FETCH_ERROR = 'SET_FETCH_ERROR';

const initialState = {
    allMovies: [],
    searchValue: '',
    filmInfo: {},
    currentPage: 1,
    isFetching: false,
    sortBy: '',
    isFetchError: false
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                allMovies: action.payload
            };
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            };
        case SET_FILM_INFO:
            return {
                ...state,
                filmInfo: action.payload
            };
        case SET_SORT_NAME:
            return {
                ...state,
                sortBy: action.payload
            };
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_FETCH_ERROR:
            return {
                ...state,
                isFetchError: action.isFetchError
            };

        default:
            return state;
    }
}

export const setMovies = (payload) => ({
    type: SET_MOVIES,
    payload
});

export const fetchedMovies = (payload) => ({
    type: FETCHED_MOVIES,
    payload
});

export const fetchedFilmInfo = (payload) => ({
    type: FETCHED_FILM_INFO,
    payload
});

export const setSearchValue = (payload) => ({
    type: SET_SEARCH_VALUE,
    payload
});

export const setCurrentPage = (payload) => ({
    type: SET_CURRENT_PAGE,
    payload
});

export const setFilmInfo = (payload) => ({
    type: SET_FILM_INFO,
    payload
});

export const setSortName = (payload) => ({
    type: SET_SORT_NAME,
    payload
});

export const toggleFetching = (isFetching) => ({
    type: TOGGLE_FETCHING,
    isFetching
});

export const setError = (isFetchError) => ({
    type: SET_FETCH_ERROR,
    isFetchError
});


