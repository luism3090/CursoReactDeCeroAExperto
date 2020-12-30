import React from 'react'
import {shallow} from 'enzyme';
import { MultipleCustomHooks } from '../../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../../hooks/useFetch';
jest.mock('../../../../hooks/useFetch');

describe('preubas en MultipleCustomHooks', () => {
    
    test('Debe de tomarse una foto snapshot', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        
        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot();

    })

    test('Debe de mostrar la informacion', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Fernando',
                quote: 'Hola mundo'
            }],
            loading: false,
            error: null
        });


        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('p').text().trim()).toBe( 'Hola mundo' );
        expect(wrapper.find('footer').text().trim()).toBe( 'Fernando' );

        //console.log(wrapper.find('p').text().trim());

    })
    

});
