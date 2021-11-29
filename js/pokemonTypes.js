// Number of pokemons by their types

let normal = [];
let grass = [];
let water = [];
let fire = [];
let poison = [];
let flying = [];
let dragon = [];
let electric = [];
let ice = [];
let dark = [];
let steel = [];
let fairy = [];
let fighting = [];
let bug = [];
let rock = [];
let ground = [];
let ghost = [];
let psychic = [];


const fetchPokemon = async () => {
    let getPokemon = await fetch('./Datasets/pokemon-json.txt');
    let pokemonJSON = await getPokemon.json();

    let pokemons = pokemonJSON.Pokemon;


    pokemons.forEach((pokemon) => {
        if (pokemon.Type === 'NORMAL') {
            normal.push(pokemon.Name);
        }
        if (pokemon.Type === 'GRASS') {
            grass.push(pokemon.Name);
        }
        if (pokemon.Type === 'WATER') {
            water.push(pokemon.Name);
        }
        if (pokemon.Type === 'FIRE') {
            fire.push(pokemon.Name);
        }
        if (pokemon.Type === 'POISON') {
            poison.push(pokemon.Name);
        }
        if (pokemon.Type === 'FLYING') {
            flying.push(pokemon.Name);
        }
        if (pokemon.Type === 'DRAGON') {
            dragon.push(pokemon.Name);
        }
        if (pokemon.Type === 'ELECTRIC') {
            electric.push(pokemon.Name);
        }
        if (pokemon.Type === 'ICE') {
            ice.push(pokemon.Name);
        }
        if (pokemon.Type === 'DARK') {
            dark.push(pokemon.Name);
        }
        if (pokemon.Type === 'STEEL') {
            steel.push(pokemon.Name);
        }
        if (pokemon.Type === 'FAIRY') {
            fairy.push(pokemon.Name);
        }
        if (pokemon.Type === 'FIGHTING') {
            fighting.push(pokemon.Name);
        }
        if (pokemon.Type === 'BUG') {
            bug.push(pokemon.Name);
        }
        if (pokemon.Type === 'ROCK') {
            rock.push(pokemon.Name);
        }
        if (pokemon.Type === 'GROUND') {
            ground.push(pokemon.Name);
        }
        if (pokemon.Type === 'GHOST') {
            ghost.push(pokemon.Name);
        }
        if (pokemon.Type === 'PSYCHIC') {
            psychic.push(pokemon.Name);
        }
    })

}


export { normal, grass, water, fire, poison, flying, dragon, electric, ice, dark, steel, fairy, fighting, bug, rock, ground, ghost, psychic };
export { fetchPokemon };