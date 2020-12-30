import React, { Children } from 'react'
const { shallow } = require("enzyme");
const { default: CounterApp } = require("../CounterApp");

describe('pruebas en el <CounterApp >', () => {
    
    test('Debe mostrar <Counter App> correctamente', () => {
        
        const wrapper = shallow(<CounterApp />);
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar <Counter App> value = 100', () => {
        
        const wrapper = shallow(<CounterApp value={100}/>);

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('100');
        

    });


    test('Debe validar el incremento del boton 1+', () => {
        
        const wrapper = shallow(<CounterApp />);

        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');

    });

    test('Debe validar el decremento del boton 1-', () => {
        
        const wrapper = shallow(<CounterApp />);

        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('9');

    });

    test('Debe colocar el valor por defecto de 10', () => {
        
        const wrapper = shallow(<CounterApp value={105}/>);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');

        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        //console.log(counterText);

        expect(counterText).toBe('105');

    })
    
    
    


});
