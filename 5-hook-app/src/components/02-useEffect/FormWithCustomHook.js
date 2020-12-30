import React, { useEffect, useState } from 'react'
import './effects.css';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {


    const [formStateValues, changeValueInput] = useForm({
            name:'',
            email:'',
            password :'' 
    });

    const {name, email, password} = formStateValues;

    // const [formState, setformState] = useState({
    //     name:'',
    //     email:'',
    //     password :''
    // });

    //const {name, email, password} = formState;

    // const changeValueInput = ({target}) => {
    //     setformState({
    //         ...formState,
    //         [ target.name ]: target.value
    //     });
    // }

    useEffect(() => {
        
        console.log('email cambio');
        
    }, [email])

    const envioForm = (e) => {
        e.preventDefault();
        
        console.log(formStateValues);
    }

    return (
        <form onSubmit={envioForm}>
            <h1>FormWithCustomHook</h1>
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
            <br></br>
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
            <br></br>
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="tu password"
                    value={ password }
                    onChange={ changeValueInput }
                />  
            </div>
            <br></br>
            <button type='submit'>
                Enviar 
            </button>

        </form>
    )
}
