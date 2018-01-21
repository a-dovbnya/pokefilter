import { createActions, createAction } from "redux-actions";

const actions = createActions({
  POKEMON_DATA: {
    REQUEST: null,
    SUCCESS: null,
    FAILURE: null
  }
});

export const fetchPokemonDataRequest = actions.pokemonData.request;
export const fetchPokemonDataSuccess = actions.pokemonData.success;
export const fetchPokemonDataFailure = actions.pokemonData.failure;