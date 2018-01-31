import React, {PureComponent} from 'react';
import {connect} from "react-redux";


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

// test component table
const Table = (props) => {
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>image</td>
                        <td>weight</td>
                        <td>height</td>
                    </tr>
                </thead>
                <tbody>
                {props.pokemons.map(el => <tr key={el.id}><td>#{el.id}</td><td><b>{el.name}</b></td><td><img src={el.sprites.front_default}/>
</td><td>{el.weight}</td><td>{el.height}</td></tr>)}
                </tbody>
            </table>
        </div>
    );
}
export class App extends PureComponent{

    componentDidMount() {

       /*  const currentPage = this.props.match.params.id;
        if( currentPage && currentPage !== this.props.currentPage ){
            this.props.setCurrentPage(currentPage);
        } */
    }
    componentWillReceiveProps(nextProps) {
        const currentPage = this.props.match.params.id;
        const nexPage = nextProps.match.params.id;

        if( currentPage !== nexPage){
            //console.log("currentPage = ", currentPage);
            //this.props.setCurrentPage(currentPage);
        }
    }

    selectPeriodHandler = (e) => {
        //this.props.selectOffset(e.target.name);
    }
    getPokemons = () => {
    
        const currentPage = this.props.match.params.id;
        console.log('id = ', currentPage);
        console.log(this.props.fetchPokemonListRequest);
        this.props.fetchPokemonListRequest(currentPage);
    }

    render(){
     
        console.log(this.props);

        console.log("APP RENDER");
        const isFetching = this.props.isFetchingPokemonList || this.props.isFetchingPokemonData;

        let pokemons = this.props.pokemonData;

        return(
            <div className="app">
                <div>
                    <button onClick={this.getPokemons}>Получить список покемонов</button>
                </div>
                <div>
                    { isFetching && <Loader size="70px" gap={4} color="green" /> }
                </div>
                <div>{pokemons.length ? <Table pokemons={pokemons}/> : null}</div>
                <PstrNav page={this.props.match.params.id}/>
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