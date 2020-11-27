
const activo = true;

let mensaje = '';

if(!activo){
  mensaje = 'Activo';
}
else{
  mensaje = 'Inactivo';
}

console.log(mensaje);

console.log("-------------------------");

// Usando el operador ternario

const activo1 = true;

let mensaje1 = (activo1) ? 'Activo' : 'Inactivo';

let mensaje2 = activo1 && 'Activo';

console.log(mensaje1);
console.log(mensaje2);






