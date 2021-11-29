import { fetchPokemon } from './pokemonTypes.js';
import { normal, grass, water, fire, poison, flying, dragon, electric, ice, dark, steel, fairy, fighting, bug, rock, ground, ghost, psychic } from './pokemonTypes.js';

async function chartIt() {
    await fetchPokemon();
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Normal', 'Grass', 'Water', 'Fire', 'Poison', 'Flying', 'Dragon', 'Electric', 'Ice', 'Dark', 'Steel', 'Fairy', 'Fighting', 'Bug', 'Rock', 'Ground', 'Ghost', 'Psychic'],
            datasets: [{
                label: '',
                data: [normal.length, grass.length, water.length, fire.length, poison.length, flying.length, dragon.length, electric.length, ice.length, dark.length, steel.length, fairy.length, fighting.length, bug.length, rock.length, ground.length, ghost.length, psychic.length],
                backgroundColor: ['#A8A77A', '#7AC74C', '#6390F0', '#EE8130', '#A33EA1', '#A98FF3', '#6F35FC', '#F7D02C', '#96D9D6', '#705746', '#B7B7CE', '#D685AD', '#C22E28', '#A6B91A', '#B6A136', '#E2BF65', '#735797', '#F95587'],
                borderColor: '#222',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

export { chartIt };