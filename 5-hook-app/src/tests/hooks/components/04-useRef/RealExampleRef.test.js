import React from 'react'
import {shallow} from 'enzyme';
import { RealExampleRef } from '../../../../components/04-useRef/RealExampleRef';

describe('Pruebas', () => {
    


    test('Debe mostrarse correctamente', () => {
        
        const wrapper = shallow(<RealExampleRef />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

    })


    test('Debe de mostrar el componente <MultipleCustom>', () => {
        
        const wrapper = shallow(<RealExampleRef />);

        wrapper.find('button').simulate('click');

        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

    })
    


});
