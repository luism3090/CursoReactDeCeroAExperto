import React, { useEffect, useState } from 'react'
import './effects.css';
import { Message } from './Message';

export const SimpleForms = () => {


    /* No se pueden usar Hooks o useState de manera condicionada 

    if (true) {

        const [formState, setformState] = useState('');
    }

    */



    const [formState, setformState] = useState({
        name:'',
        email:''
    });

    const {name, email} = formState;


    // Nota: Se debe trabajar en los efectos de manera individual 

    //  si queremos hacer algo cuando se cargar el formulario debemos colocarle [] al useEffect 
    // de lo contrario se ejecutará siempre que haya un cambio en el estado y esto no esta bien  

    useEffect( () => {
        //console.log('Hey');
    }, [] );

    // Este efecto estará pendiente de ejecutarse cuando haya un cambio en el formState (formulario)
    useEffect( () => {
        //console.log('formState ha cambiado');
    }, [formState] );


    // Este efecto estará pendiente de ejecutarse cuando haya un cambio en el input de email del form
    useEffect( () => {
        //console.log('Cambio en el email');
    }, [email] );



    const changeValueInput = ({target}) => {
        setformState({
            ...formState,
            [ target.name ]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ changeValueInput }
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu email"
                    autoComplete="off"
                    value={ email }
                    onChange={ changeValueInput }
                />  
            </div>

            { (name === '123') && <Message />}

        </>
    )
}
