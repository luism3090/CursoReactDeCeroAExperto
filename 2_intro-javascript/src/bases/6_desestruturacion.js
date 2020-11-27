// Destructuracion


const persona = {
  nombre:'Tony',
  edad:45,
  clave:'12345'
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

console.log("----------------------------------------");

// Desustruracion

const {nombre,edad:edadActual,clave} = persona;

console.log(nombre);
console.log(edadActual);
console.log(clave);


console.log("----------------------------------------");

const retornaUsuario1 = ({nombre,edad,clave,rango='Soldado'}) => {

  console.log(nombre,edad,rango);

}

retornaUsuario1(persona);

console.log("----------------------------------------");

const retornarUsuario2 = ({nombre,edad,clave})=>{
  return{
    nombreClave:clave,
    anios:edad,
    latlng:{
      lat:14.4343,
      lng:-12.3742
    }
  }
}

console.log(retornarUsuario2(persona));

const {nombreClave,anios,latlng:{lat,lng}} = retornarUsuario2(persona);

console.log(nombreClave,anios);

console.log(lat,lng);



