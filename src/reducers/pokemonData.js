import {handleActions} from 'redux-actions';

import {
    fetchPokemonDataRequest,
    fetchPokemonDataSuccess,
    fetchPokemonDataFailure
} from "../actions/pokemonData";

const initiaState = {
    isFetching: false,
    isError: false,
    data: []
}

export default handleActions({
    [fetchPokemonDataRequest]: (state, action) => ({
        ...initiaState,
        isFetching: true,
    }),
    [fetchPokemonDataSuccess]: (state, action) => ({
        data: action.payload,
        isFetching: false,
    }),
    [fetchPokemonDataFailure]: (state, action) => ({
        ...initiaState,
        isError: true
    })
}, initiaState);

export const getPokemonData = state => state.pokemonData.data;
export const isFetchingPokemonData = state => state.pokemonData.isFetching;
export const isErrorPokemonData = state => state.pokemonData.isError;
