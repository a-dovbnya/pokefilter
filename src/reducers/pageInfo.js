import {handleActions} from 'redux-actions';

import {
    setPokemonCount,
    setPokemonOnPage,
    setCurrentPage
} from "../actions/pageInfo";

const initiaState = {
    pokemonCount: 0,
    pokemonOnPage: 20,
    currentPage: 1
}

export default handleActions({
    [setPokemonCount]: (state, action) => ({
        ...initiaState,
        pokemonCount: action.payload
    }),
    [setPokemonOnPage]: (state, action) => ({
        ...initiaState,
        pokemonOnPage: action.payload
    }),
    [setCurrentPage]: (state, action) => ({
        ...initiaState,
        currentPage: action.payload
    })
}, initiaState);

export const getPokemonCount = state => state.pageInfo.pokemonCount;
export const getPokemonOnPage = state => state.pageInfo.pokemonOnPage;
export const getCurrentPage = state => state.pageInfo.currentPage;