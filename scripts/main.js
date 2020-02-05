async function getPokemon(pokemonName) {
    getPokemonFromAPI(pokemonName);
}

console.log(getPokemonImage("ditto"));
console.log(getPokemon("ditto"));
getPokemonPic("charizard");


async function getPokemonPic(pokemonName) {
    var pokemonImage = document.querySelector(".whatPokemon__img");
    console.log(pokemonImage);
    let imgSource = await getPokemonImage(pokemonName);
    console.log(imgSource);
    pokemonImage.src = imgSource;

}