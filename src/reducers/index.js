import {combineReducers} from 'redux';

import pokemonList from "./pokemonList";
import pokemonData from "./pokemonData";

export default combineReducers({
    pokemonList,
    pokemonData
});
