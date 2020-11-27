const persona = {
  nombre:'Tony',
  apellido: 'Stark',
  edad:45,
  direccion:{
  ciudad:'New York',
      zip:4123421332,
      lat: 14.14323,
      lng: 34.98783
  }
}

console.log(persona);

console.log("------------------------------");

console.log( {persona} );

console.log("------------------------------");

console.table( persona );


//console.log("---------- Esto es lo que NO se debe hacer ------------------");

//const persona2 = persona;
//persona2.nombre= 'Luis';

//console.log( persona );
//console.log( persona2 );

console.log("---------- Esto SI se debe hacer ------------------");

const persona3 = {...persona};
persona3.nombre= 'Luis';

console.log( persona );
console.log( persona3 );