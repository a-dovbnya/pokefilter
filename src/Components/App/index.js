import React, { Component } from 'react';
import axios from 'axios';
import { getPokemons } from '../../api';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {number: 1, data: []};
  }

  clickHandler = () => {
    /* variant 1 */
    /*const _this = this;
    const url = `https://pokeapi.co/api/v2/pokemon/${this.state.number}`;

    fetch(url, {method: 'GET', mode: 'cors'})
    .then(function(response){
      console.log("response status = ", response.status);  
      return response.json();
    })
    .then(function(res){
      console.log(res);
      //_this.setState({data: {...res}});
    });*/

    
    /* variant 2 */
    /*let data = [];
    let flag = true;
    const _this = this;

    function getPoke(num){
      let url = `https://pokeapi.co/api/v2/pokemon/${num}`;
      fetch(url, {method: 'GET', mode: 'cors'})
      .then(function(response){
        console.log("response status = ", response.status);  
        if(num <= 10){
          return response.json();
        }else{
          flag = false;
          return null;
        }
      })
      .then(function(res){
        console.log(res);
        if(res === null){
          console.log("=============DONE!============");
          _this.setState({data: [...data]});
        }else{
          data.push(res);

          console.log("num = ", num);
          num = num + 1;
          getPoke( num );
        }
      });
    }

    getPoke(5);*/

    /* variant 3*/
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let cnt = 1;

    axios.all(arr.map( (num) => axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)))
    .then((res) => {
      console.log(res);
    });


  }
  loadAll = () => {
    /*const instance = axios.create({
      baseURL: 'https://api.github.com/',
    });
    axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then(function (response) {
      console.time('timer');
      axios.all(response.data.results.map( (el) => axios.get(`https://pokeapi.co/api/v2/pokemon/${el.name}`)))
      .then((res) => {
        console.timeEnd('timer');
        console.log(res.map((el) => el.data));

      });
     
    });*/
    
    /*let options = {
      protocol: 'https',
      hostName: 'pokeapi.co',
      versionPath: '/api/v2/',
      cache: true,
      timeout: 5 * 10000 // 5s
    }
    let P = new Pokedex(options);
    P.resource(['/api/v2/pokemon/?limit=20&offset=40'])
    .then(function(response) {
      console.log(response); // resource function accepts singles or arrays of URLs/paths
      console.time("timer");
      P.resource(response[0].results.map(el => '/api/v2/pokemon/'+el.name))
      .then(function(response) {
        console.timeEnd('timer');
        console.log(response); // resource function accepts singles or arrays of URLs/paths
      });

    
    });*/

    getPokemons();
  }

  changeNumber = (e) => {
    this.setState({number: e.target.value});
  }
  render() {
    var poks = this.state.data;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <input onChange={this.changeNumber} />
          <button onClick={this.clickHandler}>Load</button>
          <div>
            <button onClick = {this.loadAll}>Загрузить всех</button>
          </div>
        </div>
        {Boolean(this.state.data.length) && 
          <div>
            <table border="1">
              {poks.map((el, index) => <tr index={index}><td>{el.id}</td><td>{el.name}</td><td><img src={el.sprites.front_default} /></td></tr>)}
              
            </table>
            
          </div>
        }

      </div>
    );
  }
}

export default App;
