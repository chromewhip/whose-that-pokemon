let pokemonInfoArray = [];
let randomized = false;

async function randomizePokemon() {
  document.querySelector(".whatPokemon__body-text").innerHTML =
    "Who is that Pokemon?";
  // pokemonInfoArray = [];
  let pokemonId = Math.floor(Math.random() * 150); //returns a random number between 1-150
  let pokemonObject = await getPokemon(pokemonId);
  pokemonInfoArray = [];
  pokemonInfoArray.push(pokemonObject);
  let pokemonImg = pokemonObject.sprites.front_default;
  document.querySelector(".whatPokemon__img").src = pokemonImg;
  randomized = true;
}

if (!randomized) randomizePokemon();

function displayPokemonBio(pokemonObject) {
  let pokemonBioElement = document.querySelector(".pokemon__bio");
  let pokemonBioBlock = document.createElement("div");

  let pokemonName = pokemonObject.species.name;
  let pokemonTypes = pokemonObject.types;

  let pokemonType1 = pokemonTypes[0].type.name;
  let pokemonType2;

  console.log(pokemonTypes[0].type);

  console.log(pokemonTypes.length);

  if (pokemonTypes.length > 1) {
    pokemonType2 = pokemonTypes[1].type.name;
  } else {
    pokemonType2 = "none";
  }

  let pokemonStats = [];

  for (stat in pokemonObject.stats) {
    console.log(pokemonObject.stats[stat].stat.name);
    let statObj = {};
    let statName = pokemonObject.stats[stat].stat.name;
    let statValue = pokemonObject.stats[stat].base_stat;
    pokemonStats[statName] = statValue;
  }

  let pokemonSpeed = pokemonStats["speed"];
  let pokemonDefense = pokemonStats["defense"];
  let pokemonAttack = pokemonStats["attack"];
  let pokemonSpecialAttack = pokemonStats["special-attack"];
  let pokemonSpecialDefense = pokemonStats["special-defense"];
  //   let pokemonSpecialHp = pokemonStats["special-hp"];
  let pokemonHp = pokemonStats["hp"];
  let pokemonDiv1 = document.createElement("div");
  pokemonDiv1.classList.add("pokemon__header");

  pokemonDiv1.innerHTML = `
                        <h1>
                            ${pokemonName}
                        </h1>

                        <div class="pokemon__types">
                            <ul>
                                <li>
                                    Type 1: ${pokemonType1}
                                </li>
                                <li>
                                    Type 2: ${pokemonType2}
                                </li>
                            </ul>
                        </div>
                        `;
  let pokemonDiv2 = document.createElement("div");
  pokemonDiv2.innerHTML = `
                        <div class="pokemon__stats">
                            <div class="pokemon__stat">
                            <h1>STATS</h1>
                            <h3>HP: ${pokemonHp}</h3>
                                <h3>Attack: ${pokemonAttack}</h3>
                                <h3>Defense: ${pokemonDefense}</h3>
                                    <h3>Special Attack: ${pokemonSpecialAttack}</h3>
                                <h3>Special Defense: ${pokemonSpecialDefense}</h3>
                                <h3>Speed: ${pokemonSpeed}</h3>
                            </div>
                    </div>
                        `;

  console.log(pokemonObject);
  console.log(pokemonStats);
  pokemonBioElement.appendChild(pokemonDiv1);
  pokemonBioElement.appendChild(pokemonDiv2);
  let pokemonTypeDone = false;
}

async function getPokemonPic(pokemonName) {
  var pokemonImage = document.querySelector(".whatPokemon__img");
  console.log(pokemonImage);
  let imgSource = await getPokemonImage(pokemonName);
  console.log(imgSource);
  pokemonImage.src = imgSource;
}

const testThePokemonName = () => {
  const pokemonNameToCheck = document.querySelector(".pokemonForm__name").value;
  document.querySelector(".whatPokemon__body-text").innerHTML =
    "IT'S " + pokemonInfoArray[0].name + "!";
  if (pokemonNameToCheck.toLowerCase() === pokemonInfoArray[0].name) {
    alert("congrats! you selected the correct pokemon!");
    // console.log();
  } else {
    alert("too bad! You got it wrong!");
  }
  displayPokemonBio(pokemonInfoArray[0]);
};

// document.querySelector(".pokemonForm__form").addEventListener('submit', testThePokemonName, evt.preventDefault());

document
  .querySelector(".randomize__pokemon")
  .addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".whatPokemon__img").classList.add("blurred");
    document.querySelector(".pokemon__header").remove();
    randomizePokemon();
  });

document
  .querySelector(".pokemonForm__form")
  .addEventListener("submit", function(evt) {
    evt.preventDefault();

    // console.log(pokemonInfoArray[0]);
    document.querySelector(".whatPokemon__img").classList.remove("blurred");
    testThePokemonName();
    document.querySelector(".pokemonForm__form").reset();
  });
