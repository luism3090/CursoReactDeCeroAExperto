import { getUser,getUsuarioActivo } from "../../base/05-funciones";


describe('Haciendo pruebas en el archivo 05-funciones.js', () => {

    test('Probando la funcion getUser debe retornar un objeto', () => {
        
        const objeUsuario1 = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const objeUsuario2 = getUser();

        expect(objeUsuario2).toEqual(objeUsuario1);


    });


    test('Haciendo pruebas en la funcion getUsuarioActivo debe retornar un objeto ', () => {

        const nombre = 'Luis';

        const objeUsuarioActivo1 = {
            uid: 'ABC567',
            username: nombre
        }

        const objeUsuarioActivo2 = getUsuarioActivo(nombre);

        expect(objeUsuarioActivo2).toEqual(objeUsuarioActivo1);


    })
    
    


});


