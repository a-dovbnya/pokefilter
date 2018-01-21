import {takeLatest, put, call} from 'redux-saga/effects';
import {
    fetchPokemonListRequest,
    fetchPokemonListSuccess,
    fetchPokemonListFailure
} from "../actions/pokemonList";

import { fetchPokemonDataRequest } from "../actions/pokemonData";

import { fetchPokemonList } from "../api";

function* fetchPokemonListFlow(action) {
    
    try {
      const response = yield call(fetchPokemonList);
        
      yield put(fetchPokemonListSuccess(response[0].results));
      yield put(fetchPokemonDataRequest());

    } catch (error) {
      yield put(fetchPokemonListFailure(error));
    }
}

export function* fetchPokemonListWatch() {
    yield takeLatest(fetchPokemonListRequest, fetchPokemonListFlow);
}
