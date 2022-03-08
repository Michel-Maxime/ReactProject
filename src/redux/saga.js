import { call, all, put, takeLatest } from "redux-saga/effects";
import { add, addAbout } from "./heroesSlice.js";

async function httpClient(url) {
  const response = await fetch(url);
  const data = await response.json();
  return Array.isArray(data) ? data.slice(0, 20) : data;
}

// worker Saga
export function* fetchHeroes() {
  const heroes = yield call(
    httpClient,
    `https://akabab.github.io/superhero-api/api/all.json`
  );
  yield put(add(heroes));
}

export function* fetchHeroeAbout(action) {
  console.log(action);
  console.log(action.payload.id);
  const heroeAbout = yield call(
    httpClient,
    `https://akabab.github.io/superhero-api/api/id/${action.payload.id}.json`
  );
  console.log("saga fetch heroeAbout is call");
  yield put(addAbout(heroeAbout));
}

// watcher Saga
export function* watchHeroes() {
  yield takeLatest("FETCH_HEROES", fetchHeroes);
}

export function* watchHeroeAbout() {
  yield takeLatest("FETCH_HEROES_ABOUT", fetchHeroeAbout);
}

// root Saga
export function* rootSaga() {
  yield all([watchHeroes(), watchHeroeAbout()]);
}
