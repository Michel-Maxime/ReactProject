import { call, all, put, takeLatest } from "redux-saga/effects";
import { add } from "./heroesSlice.js";

async function httpClient(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.slice(0, 20);
}

// worker Saga
export function* fetchHeroes() {
  const heroes = yield call(
    httpClient,
    `https://akabab.github.io/superhero-api/api/all.json`
  );
  console.log("saga fetch heroes is call");
  yield put(add(heroes));
}

// watcher Saga
export function* watchHeroes() {
  yield takeLatest("FETCH_HEROES", fetchHeroes);
}

// root Saga
export function* rootSaga() {
  yield all([watchHeroes()]);
}
