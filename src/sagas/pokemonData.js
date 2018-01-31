import {takeLatest, put, call, select} from 'redux-saga/effects';
import {
    fetchPokemonDataRequest,
    fetchPokemonDataSuccess,
    fetchPokemonDataFailure
} from "../actions/pokemonData";

import { fetchPokemonData } from "../api";
import { getPokemonList } from "../reducers/pokemonList";

function* fetchPokemonDataFlow(action) {
    try {
      const list = yield select(getPokemonList);
      const response = yield call(fetchPokemonData, list);
      yield put(fetchPokemonDataSuccess(response));
    } catch (error) {
      yield put(fetchPokemonDataFailure(error));
    }
}

export function* fetchPokemonDataWatch() {
    yield takeLatest(fetchPokemonDataRequest, fetchPokemonDataFlow);
}
