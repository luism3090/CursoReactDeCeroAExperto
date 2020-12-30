import heroes from '../../data/heroes';
import {getHeroeById,getHeroesByOwner} from '../../base/08-imp-exp';

describe('Haciendo Pruebas para el archivo  08-imp-exp.js', () => {
    
    test('Debe validar la funcion getHeroeById() de retornar un heroe', () => {
        
        const heroeFunction = getHeroeById(1);

        const heroeData = heroes.find( (her)=>her.id==heroeFunction.id)

        expect(heroeFunction).toEqual(heroeData);

        

    });

    test('Debe validar que la funcion getHeroeById regrese undefined cuando no se encuentre el id', () => {
        
        const heroeFunction = getHeroeById(10);

        expect(heroeFunction).toBe(undefined);

    });



    test('Debe validar los objetos que se obtengan de la funcion getHeroeById', () => {
        
        const owner = "DC";

        const heroesFuncion = getHeroesByOwner(owner);

        const heroesData = heroes.filter( (h) => h.owner === owner);

        expect(heroesFuncion).toEqual(heroesData);

    });
    
    test('Debe validar que el lenth = 2 con el valor Marvel', () => {
        
        const owner = "Marvel";

        const heroesFuncion = getHeroesByOwner(owner);

        expect(heroesFuncion.length).toBe(2);

    })
    
    


});





