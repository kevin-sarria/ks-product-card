import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle } from '../../src/components'

 describe('Pruebas en el ProductTitle', () => {

    test( 'Debe de mostrar el componente correctamente con el titulo personalizado', () => {
        const wrapper = renderer.create(
            <ProductTitle title='Custom Product' />
        );

        console.log(wrapper.toJSON());

    } );

 });