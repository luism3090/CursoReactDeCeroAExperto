import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import PrimeraApp,{Componente2} from '../PrimeraApp';

describe('Pruebas en <PrimeraApp>', () => {
    
    test('Debe mostrar el mensaje Hola, Soy Goku', () => {
        
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();


    })
    
});


describe('Pruebas en <Componente2>', () => {
    
    test('Debe mostrar los saludos correctos', () => {
        
        const saludo = 'Hola, que tal';
        const dato1 = 123;
        const dato2 = 'Obligatorio';
        const subtitulo = 'Excelente subtitulo';
        const wrapper = shallow(<Componente2 
                                            saludo={saludo} 
                                            dato1={dato1} 
                                            dato2={dato2} 
                                            subtitulo={subtitulo}
                                            
                                />);

        // expect(wrapper).toMatchSnapshot();

        const textoH3 = wrapper.find('h3').text();

        console.log(textoH3);
        console.log(subtitulo);

        expect(textoH3).toBe(subtitulo);


    })
    
});
