import React from 'react';

// test component table
export const PokemonTable = (props) => {
    console.log("Pokemon Table render");
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
