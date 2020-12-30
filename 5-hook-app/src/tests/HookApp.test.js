import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import { HookApp } from "../HookApp";

describe('Validar el archivo Hook App', () => {
    
    test('debe de hacer el snapchoop del HookApp ', () => {

        const wrapper = shallow(<HookApp />);

        expect(wrapper).toMatchSnapshot();

    });

    

});
