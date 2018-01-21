import React, {PureComponent} from 'react';
import {connect} from "react-redux";


//import { selectBtc, selectEth, selectOffset, fetchUserRequest } from "../../actions/currency";
import { fetchPokemonListRequest, fetchPokemonListSuccess, fetchPokemonListFailure } from "../../actions/pokemonList";
import Loader from 'react-svg-spinner';
//import TradeOperations from "../TradeOperations";
//import UserInfo from "../UserInfo";

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
                {props.pokemons.map(el => <tr key={el.id}><td>#{el.id}</td><td>{el.name}</td><td><img src={el.sprites.front_default}/>
</td><td>{el.weight}</td><td>{el.height}</td></tr>)}
                </tbody>
            </table>
        </div>
    );
}
export class App extends PureComponent{

    componentDidMount() {
        /*const symbol = this.props.match.params.symbol;
        if (symbol) {
            this.props.selectBtc(symbol);
        }
        // Отправка запроса на получение данных пользователя
        this.props.fetchUserRequest();*/
    }
    componentWillReceiveProps(nextProps) {
        /*const currentSymbol = this.props.match.params.symbol;
        const nextSymbol = nextProps.match.params.symbol;

        if (currentSymbol !== nextSymbol ) {
            if(nextSymbol !== undefined){
                this.props.selectBtc(nextSymbol);
            }
        }*/
    }

    selectPeriodHandler = (e) => {
        //this.props.selectOffset(e.target.name);
    }
    getPokemons = () => {
        this.props.fetchPokemonListRequest();
    }


    render(){
     
        console.log(this.props);
        const isFetching = this.props.isFetchingPokemonList || this.props.isFetchingPokemonData;

   
        let pokemons = this.props.pokemonData;

        return(
            <div className="app">
                <div>
                    <button onClick={this.getPokemons}>Получить список покемонов</button>
                </div>
                <div>
                    { isFetching && <Loader size="70px" gap={4} color="fuchsia" /> }
                </div>
                <div>{pokemons.length ? <Table pokemons={pokemons}/> : null}</div>
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
});
const mapDispatchToProps = {
    fetchPokemonListRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(App);