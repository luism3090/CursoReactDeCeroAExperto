// no se recomienda hacer las funciones de la siguiente manera porque se puede 
// colocarles otro valor despues de haberla creado

function saludar1(nombre){
  return `Hola, ${nombre}`;
}

console.log(saludar1);

console.log(saludar1('Goku'));

//saludar1 = 30;

console.log(saludar1);


console.log("-------------------------------------------------------------");

// ESta forma es mas recomendada

const saludar2 = function(nombre){
  return `Hola, ${nombre}`;
}

console.log(saludar2);
console.log(saludar2('Vegueta'));

console.log("-------------------------------------------------------------");

// funciones de flecha

const saludar3 = (nombre) =>{
  return `Hola, ${nombre}`;
}

console.log(saludar3('Luis'));

const saludar4 = (nombre) => `Hola, ${nombre}`; 

console.log(saludar4('Luis'));

const saludar5 = () => `Hola mundo`;

console.log(saludar5());

console.log("-------------------------------------------------------------");

// funciones de flecha que retornan un objeto

const getUser1 = () =>{
  return{
    uid:'ABC123',
    username:'pepito123'
  }
}

console.log(getUser1());

const getUser2 = () => ({
    uid:'ABC123',
    username:'pepito123'
  });

console.log(getUser2());

console.log("-------------------------------------------------------------");

// otros ejemplos más

function getMascota1(nombre,raza){
  return {
    uid: '123zxc',
    nombre:nombre,
    raza:raza
  }
}

console.log(getMascota1('Chikun','Siames'));

const getMascota2 = function(nombre,raza){
  return {
    uid: '123zxc',
    nombre:nombre,
    raza:raza
  }
}

console.log(getMascota2('Firulais','Pastor'));

const getMascota3 = (nombre,raza)=>{
  return {
    uid: '123zxc',
    nombre:nombre,
    raza:raza
  }
}

console.log(getMascota3('Juanito','Payaso'));

const getMascota4 = (nombre,raza)=>({
    id: '123zxc',
    nombre:nombre,
    raza:raza
});

console.log(getMascota4('Coke','Perico'));














