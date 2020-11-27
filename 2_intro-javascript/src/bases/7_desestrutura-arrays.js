const personajes = ['Goku','Vegeta','Trunks'];

// Anteriormente se hacia así:

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

// Ahora aplicando la destruturacion de arreglos

console.log("----------------------------------------")

const [per1,per2,per3] = personajes;

console.log(per1);
console.log(per2);
console.log(per3);

console.log("----------------------------------------");

const [,,p3] = personajes;

console.log(p3);

console.log("----------------------------------------");

const retornarArreglo = ()=>{
  return ['ABC',123];
}

console.log(retornarArreglo());

const [v1,v2] = retornarArreglo();

console.log(v1);
console.log(v2);

console.log("----------------------------------------");

const regresaArreglo = ()=>{
  return ["Goku",()=> {return 'Hola mundo'}]
}

console.log(regresaArreglo());
console.log(regresaArreglo()[0]);
console.log(regresaArreglo()[1]());

console.log("----------------------------------------");

const [val1,val2] = regresaArreglo();

console.log(val1);
console.log(val2());


