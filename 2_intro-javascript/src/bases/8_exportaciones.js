//import {heroes} from './data/heroes';

const { heroes } = require("./data/heroes"); // recomendada

console.log(heroes);


const getSuperHeroeById = (id) => {
  return heroes.find( (heroe) => heroe.id === id);
}

console.log(getSuperHeroeById(4));

const getHeroesByOwner = (owner)=>
{
  return heroes.filter((heroe) => heroe.owner === owner);
}

console.log(getHeroesByOwner('Marvel'));


