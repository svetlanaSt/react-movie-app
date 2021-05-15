import { call, put, takeEvery } from "redux-saga/effects";
import { getPopularMovies } from "../../api/api";
import { setMovies, FETCHED_MOVIES, toggleFetching, setError } from "../reducers/reducer"

export function* allMoviesWorker(action) {
    try {
        yield put(toggleFetching(true));
        const payload = yield call(getPopularMovies, action.payload);
        yield put(toggleFetching(false));
        yield put(setMovies(payload.data.results));
    } catch (e) {
        yield put(setError(true));
    }
}

export function* allMoviesWatcher() {
    yield takeEvery(FETCHED_MOVIES, allMoviesWorker);
}
