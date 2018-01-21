import { createActions, createAction } from "redux-actions";

const actions = createActions({
  POKEMON_LIST: {
    REQUEST: null,
    SUCCESS: null,
    FAILURE: null
  }
});

export const fetchPokemonListRequest = actions.pokemonList.request;
export const fetchPokemonListSuccess = actions.pokemonList.success;
export const fetchPokemonListFailure = actions.pokemonList.failure;
