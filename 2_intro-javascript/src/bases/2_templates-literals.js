const nombre = 'Luis';
const apellido = 'Molina' ;

const nombreCompleto = `${nombre} 
${apellido} ${ 5 + 5}`;

console.log(nombreCompleto);

function getSaludo(nombre){
  return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);