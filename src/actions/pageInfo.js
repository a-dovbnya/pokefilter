import { createActions, createAction } from "redux-actions";

const actions = createActions({
  PAGE_INFO: {
    POKEMON_COUNT: null,
    POKEMON_ON_PAGE: null,
    CURRENT_PAGE: null
  }
});

export const setPokemonCount = actions.pageInfo.pokemonCount;
export const setPokemonOnPage = actions.pageInfo.pokemonOnPage;
export const setCurrentPage = actions.pageInfo.currentPage;