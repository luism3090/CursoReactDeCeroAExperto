const { useForm } = require("../../hooks/useForm");
import { renderHook , act} from '@testing-library/react-hooks';


describe('pruebas en useForm', () => {
    
    const initialForm = {
        name: 'Luis',
        email: 'luis@hotmail.com'
    };


    test('debe de regresar un formlario por defecto', () => {
        
        const { result }  = renderHook( () => useForm(initialForm) );

        const [ formStateValues, changeValueInput, reset ]  = result.current;

        expect(formStateValues).toEqual(initialForm);
        expect( typeof changeValueInput ).toBe('function');
        expect( typeof reset ).toBe('function');


    });

    test('debe de cambiar el valor del formularo (cambiar name)' , () => {
        
        const { result }  = renderHook( () => useForm(initialForm) );

        var [ formStateValues, changeValueInput ]  = result.current;

        //console.log(formStateValues);


        act( () => {

            changeValueInput({
                target:{
                    name: 'name',
                    value: 'Juanito Ro'
                }
            });

        });

        //console.log(formStateValues);

        var [ formStateValues ]  = result.current;

        expect(formStateValues).toEqual( { ...initialForm,name:'Juanito Ro' } );

    });
    


    test('debe de restablecer el formulario con RESET' , () => {
        
        const { result }  = renderHook( () => useForm(initialForm) );

        var [ formStateValues, changeValueInput, reset ]  = result.current;

        //console.log(formStateValues);

        act( () => {

                changeValueInput({
                    target:{
                    name: 'name',
                    value: 'Juanito Ro'
                }
            });

            reset();

        });

        var [ formStateValues ]  = result.current;

        //console.log(formStateValues);

        expect(formStateValues).toEqual(initialForm);

    });
    

});
