import {handleActions} from 'redux-actions';

import {
    fetchPokemonListRequest,
    fetchPokemonListSuccess,
    fetchPokemonListFailure
} from "../actions/pokemonList";

const initiaState = {
    isFetching: false,
    isError: false,
    list: []
}

export default handleActions({
    [fetchPokemonListRequest]: (state, action) => ({
        ...initiaState,
        isFetching: true,
    }),
    [fetchPokemonListSuccess]: (state, action) => ({
        list: action.payload,
        isFetching: false,
    }),
    [fetchPokemonListFailure]: (state, action) => ({
        ...initiaState,
        isError: true
    })
}, initiaState);

export const getPokemonList = state => state.pokemonList.list;
export const isFetchingPokemonList = state => state.pokemonList.isFetching;
export const isErrorPokemonList = state => state.pokemonList.isError;
