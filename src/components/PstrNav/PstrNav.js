import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom'

import "./PstrNav.css";

import {getPokemonCount, getPokemonOnPage} from '../../reducers/pageInfo';

export class PstrNav extends PureComponent{

    pageRender = (i) => {
        return (
            <Link to={`/page/${i}`} className="pstr-link" key={i}>{i}</Link>
        );
    }

    render(){

        let pages = Math.ceil( this.props.pokemonCount/this.props.pokemonOnPage ); 
        let arr = [];
        for(let i = 1; i <= pages; i++){
            arr.push(this.pageRender(i));
        }

        return (
            <div>
                {arr}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    pokemonCount: getPokemonCount(state),
    pokemonOnPage: getPokemonOnPage(state)
});
export default connect(mapStateToProps, null)(PstrNav);