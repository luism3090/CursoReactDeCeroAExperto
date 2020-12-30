import { renderHook , act} from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
    
    test('debe de retornar valores por defecto', () => {
        
        
        const { result } = renderHook( () => useCounter() );

        //console.log( result.current );

        expect( result.current.state ).toBe(10);
        expect( typeof result.current.incrementar ).toBe('function');
        expect( typeof result.current.decrementar ).toBe('function');
        expect( typeof result.current.incrementarWithFactor ).toBe('function');
        expect( typeof result.current.decrementarWithFactor ).toBe('function');

    });


    test('debe de tener el state en 100', () => {
        
        
        const { result } = renderHook( () => useCounter(100) );

        //console.log( result.current );

        expect( result.current.state ).toBe(100);
    

    });

    test('debe de increemtnar en 1', () => {
        
        const { result } = renderHook( () => useCounter(100) );

        const { incrementar } = result.current;

        act( () => {

            incrementar();

        });
        
        const { state } = result.current
        expect(state).toBe(101);

    });


    test('debe de decrementar en 1', () => {
        
        const { result } = renderHook( () => useCounter(100) );

        const { decrementar } = result.current;

        act( () => {

            decrementar();

        });
        
        const { state } = result.current
        expect(state).toBe(99);

    });

    test('debe de reset el valor del counter en 100', () => {
        
        const { result } = renderHook( () => useCounter(100) );

        const { reset, decrementar } = result.current;

        // console.log(state);

        act( () => {

            decrementar();
            reset();

        });
        
        const { state } = result.current;
        expect(state).toBe(100);
    
    });
    


    test('debe de incrementar el valor dependiendo el factor', () => {
        
        const counter = 100;

        const { result } = renderHook( () => useCounter(100) );

        const { incrementarWithFactor } = result.current;

        // console.log(state);
        const factor = 17;
        
        act( () => {

            incrementarWithFactor(factor);            

        });
        
        const { state } = result.current;
        expect(state).toBe(counter+factor);
    
    });
    

})
