// Arreglos en JS

// esta forma de declarar arreglos YA NO SE DEBE USAR
// const arreglo = new Array(100); 

// Asi es como debemos declarar un arreglo

// No hay que agregarles valores a un arreglo con el metdodo .push() debido
// a que modifica el objeto principal es mejor usar el operador spread

const arreglo1 = [];
arreglo1.push(1);
arreglo1.push(2);
arreglo1.push(3);
arreglo1.push(4);

console.log(arreglo1);

console.log("---------------------------------------");

const arreglo2 = [1,2,3,4];

let arreglo3 = [...arreglo2,5];

console.log(arreglo2);
console.log(arreglo3);

const arreglo4 = arreglo3.map((numero)=>{
  return numero*2;
});

console.log(arreglo4);


