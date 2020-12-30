import {getHeroeByIdAsync} from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('validando el archivo 09-promesas.js', () => {
    

    // cuando se valide funciones async y que tengan una promesa se debe usar done
    test('Debe validar la funcion asincrona getHeroeByIdAsync retornando un Heroe', (done) => {
        
        const id = 1;
        
        getHeroeByIdAsync(id)
        .then((heroe)=>{
            //console.log(heroe);
            expect(heroe).toBe(heroes[0]);
            done();
        });

    });

    // cuando se valide funciones async y que tengan una promesa se debe usar done
    test('Debe validar la funcion asincrona getHeroeByIdAsync cuando no existe el Heroe', (done) => {
        
        const id = 10;
        
        getHeroeByIdAsync(id)
        .catch( error =>{
            //console.log(heroe);
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });

    });
    

});


