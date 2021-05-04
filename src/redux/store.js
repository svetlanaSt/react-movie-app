import thunk from "redux-thunk";
import {all} from "redux-saga/effects";
import { reducer } from "./reducer";
import createSagaMiddleware from "redux-saga";
import { allMoviesWatcher} from "./saga/moviesSaga";
import { filmInfoWatcher } from "./saga/filmInfoSaga";

function * rootSaga() {
    yield all ( [
      allMoviesWatcher(),
      filmInfoWatcher()
    ])
  }

const saga = createSagaMiddleware();
const { createStore, applyMiddleware } = require("redux");

let store = createStore(reducer, applyMiddleware(thunk, saga));

saga.run(rootSaga);


export default store;