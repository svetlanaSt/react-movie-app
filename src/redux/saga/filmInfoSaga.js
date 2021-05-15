import {call, put, takeEvery} from "redux-saga/effects";
import { getInformationAboutFilm } from "../../api/api";
import {setFilmInfo, FETCHED_FILM_INFO } from "../reducers/reducer"

export function* filmInfoWorker(action) {    
    const payload = yield call(getInformationAboutFilm, action.payload);    
    yield put(setFilmInfo(payload.data));
}

export function* filmInfoWatcher() {
   yield takeEvery(FETCHED_FILM_INFO, filmInfoWorker);
}


