import {combineReducers} from 'redux';

import pokemonList from "./pokemonList";
import pokemonData from "./pokemonData";
import pageInfo from "./pageInfo";

export default combineReducers({
    pokemonList,
    pokemonData,
    pageInfo
});
