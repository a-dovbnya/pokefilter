import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import { browserHistory } from 'react-router';

//import { selectBtc, selectEth, selectOffset, fetchUserRequest } from "../../actions/currency";
import { fetchPokemonListRequest, fetchPokemonListSuccess, fetchPokemonListFailure } from "../../actions/pokemonList";
import { setCurrentPage } from "../../actions/pageInfo";

import Loader from 'react-svg-spinner';
import PstrNav from '../PstrNav';

import {
    getPokemonList,
    isFetchingPokemonList,
    isErrorPokemonList
} from "../../reducers/pokemonList";

import {
    getPokemonData,
    isFetchingPokemonData,
    isErrorPokemonData
} from "../../reducers/pokemonData";

import { getCurrentPage } from "../../reducers/pageInfo";

import { PokemonTable } from "../PokemonTable/PokemonTable";
//import Pagination from "react-js-pagination";
import ReactPaginate from 'react-paginate';



export class App extends PureComponent{

    componentDidMount() {
       console.log('component did mount');
       const currentPage = this.props.match.params.id;
       this.props.fetchPokemonListRequest(currentPage);
    }
    componentWillReceiveProps(nextProps) {
        console.log('will receive props');
        const currentPage = this.props.match.params.id;
        const nexPage = nextProps.match.params.id;

        if( currentPage !== nexPage){
            this.props.fetchPokemonListRequest(nexPage);
        }
    }

    getPokemons = () => {
    
        const currentPage = this.props.match.params.id;
        this.props.fetchPokemonListRequest(currentPage);
    }

    handlePageClick = (a) => {
        let page = a.selected + 1 || 1;
        //this.props.history.push(`/page/${page}`);
    }

    render(){
     
        console.log("============================");
        console.log("APP RENDER");
        const isFetching = this.props.isFetchingPokemonList || this.props.isFetchingPokemonData;

        let pokemons = this.props.pokemonData;

        return(
            <div className="app">

                <div>
                    { isFetching ? 
                        <Loader size="70px" gap={4} color="green" /> 
                        :
                        <div>
                            <PokemonTable pokemons={pokemons} />
                            <PstrNav page={this.props.match.params.id} />
                            <ReactPaginate
                                hrefBuilder={i=>`/page/${i}`}
                                pageCount={41}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                initialPage={1}
                                forcePage={this.props.match.params.id}
                                onPageChange={this.handlePageClick}
                            />
                        </div>
                    }
                </div>

           </div>
                
       
        );
    };
}

const mapStateToProps = state => ({
    pokemonList: getPokemonList(state),
    isFetchingPokemonList: isFetchingPokemonList(state),
    isErrorPokemonList: isErrorPokemonList(state),
    pokemonData: getPokemonData(state),
    isFetchingPokemonData: isFetchingPokemonData(state),
    isErrorPokemonData: isErrorPokemonData(state),
    currentPage: getCurrentPage(state)
});
const mapDispatchToProps = {
    fetchPokemonListRequest,
    setCurrentPage
};
export default connect(mapStateToProps, mapDispatchToProps)(App);