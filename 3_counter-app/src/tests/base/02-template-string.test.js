import '@testing-library/jest-dom';

import {getSaludo} from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
    
    test('prueba en el metodo getSaludo debe retornar Hola Fernando!', () => {
        
        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);

        console.log(saludo);

        expect(saludo).toBe('Hola ' + nombre+"!");


    });

    // prueba debe retornar Hola Mundo! cuando no se le pasa el parametro nombre
    test('getSaludo debe retornar Hola Mundo!', () => {

        const saludo = getSaludo();

        console.log(saludo);

        expect(saludo).toBe('Hola Mundo!');

    });
    

});
