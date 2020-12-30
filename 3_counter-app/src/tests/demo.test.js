
describe('Pruebas en el archivo demo.test.js', () => {
    
    test('debe de ser true', () => {
    
        // ----- Esto solo fue una prueba de principiante ------- 
    
        const isActive = true;
    
        if(!isActive){
            throw new Error("No esta activo");
        }
    });

    
    test('deben de ser iguales los string', () => {
        

        // ----- Esto solo fue una prueba oficial ------- 


        // 1. Inicializacion

        const mensaje = "Hola mundo";

        // 2. Estimulo

        const mensaje2 = `Hola mundo`;

        
        // observar el comportamiento

        expect(mensaje).toBe(mensaje2);  // ===
        
    });
    

});






