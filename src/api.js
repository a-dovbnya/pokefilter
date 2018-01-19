import { Pokedex } from 'pokeapi-js-wrapper';

const options = {
    protocol: 'https',
     hostName: 'pokeapi.co',
    versionPath: '/api/v2/',
      cache: true,
    timeout: 5 * 10000 // 50s
};
const P = new Pokedex(options);

export const getPokemons = () => {
    P.resource(['/api/v2/pokemon/?limit=20&offset=60'])
    .then((response) => {
        console.log("res = ", response);
        console.time("timer");
      P.resource(response[0].results.map(el => '/api/v2/pokemon/'+el.name))
      .then((response) => {
        console.timeEnd('timer');
        console.log(response); 
      });
    });
}