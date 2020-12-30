import {getImagen} from '../../base/11-async-await';

describe('validando el archivo 11-async-await', () => {
    

    test('Debe validar la funcion getImagen', async () => {

        const url = await getImagen();

        console.log(url);

        expect(url.includes('https://')).toBe(true);

    })
    

});
