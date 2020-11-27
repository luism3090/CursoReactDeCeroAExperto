import {heroes} from './data/heroes';

const getHeroeById = (id) =>{
  return heroes.find((heroe) => heroe.id === id )
}

const promesa = new Promise( (resolve,reject) => {

  setTimeout(() => {
    
    if("1"==="2"){
      const heroe = getHeroeById(1);
      resolve(heroe);
    }
    else{
      reject("No se pudo encontrar el heroe");
    }
      
  }, 2000);

});

promesa.then( (res)=> {
  console.log(res);
})
.catch((err)=>{
  console.log(err);
});


const getHeroeByIdAsync = (id) => {

    const promesa = new Promise( (resolve,reject) => {

    setTimeout(() => {
      
      const heroe = getHeroeById(id);

      if(heroe){
        resolve(heroe);
      }
      else{
        reject("No se pudo encontrar el heroe");
      }
        
    }, 2000);

  });

  return promesa;

}

getHeroeByIdAsync(5)
  .then((heroe) => console.log(heroe))
  .catch((error) => console.log(error))


