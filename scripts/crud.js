// async function getPokemonFromAPI(pokemonName) {
//     const url =
//         "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
//     let promiseObject = await axios.get(url);
//     console.log(promiseObject.data);
//     return promiseObject.data;
// }

async function getPokemon(pokemonNameorId) {
    const url =
        "https://pokeapi.co/api/v2/pokemon/" + pokemonNameorId;
    let promiseObject = await axios.get(url);
    // console.log(promiseObject.data);
    // console.log(promiseObject.data.sprites.front_default);
    return promiseObject.data;
}