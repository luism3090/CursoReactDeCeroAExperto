// Esta forma de importar ya no es muy recomendada
import {heroes} from './data/datos';

// Importando por default
import arrayDefault from './data/datos2';

// Otra forma de Importar por default
import arregloValores from './data/datos';

// Importar varios objetos a la vez

import numeros,{letras} from './data/datos3';


// Importar multiples objetos a la vez

import productos, { frutas,pi,personas } from "./data/datos4";

// imprimiendo los valores importados

console.log("heroes:", heroes);

console.log("arrayDefault:", arrayDefault);

console.log("arregloValores:", arregloValores);

console.log("numeros:",numeros);

console.log("letras:",letras);

console.log("productos:",productos);

console.log("frutas:",frutas);

console.log("pi:",pi);

console.log("personas:",personas);
