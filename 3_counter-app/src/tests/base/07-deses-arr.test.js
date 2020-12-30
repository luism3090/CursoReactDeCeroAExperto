import {retornaArreglo,useState} from '../../base/07-deses-arr';

describe('Pruebas en el archivo 07-deses-arr', () => {

    test('Pruebas en la funcion retornarArreglo', () => {
        
        const arreglo = retornaArreglo();
        const [letras,numeros] = retornaArreglo();

        //console.log(arreglo);

        expect(arreglo).toEqual(['ABC', 123]);

        expect(letras).toBe('ABC');
        expect(numeros).toBe(123);

        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');


    });
    

    test('Pruebas con la funcion useState debe regresar un valor y una funcion', () => {
        
        const valor = 'Luis';
        const [nombre,unaFuncion] = useState(valor);

        expect(nombre).toEqual(valor);
        
        expect(typeof unaFuncion ).toEqual("function");
        

    })
    



});
