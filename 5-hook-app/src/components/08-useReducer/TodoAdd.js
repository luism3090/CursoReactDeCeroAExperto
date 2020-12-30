import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ( { functAddTodo } ) => {

    const [ {descripcion}, changeValueInput, reset] = useForm({
        descripcion:''
    });

    const functEnvioTodoList = (e) => {
        
        e.preventDefault();

        if( descripcion.trim().length == 0){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: descripcion,
            done: false
        }

        
        functAddTodo(newTodo);
        reset();

    }

    return (
        <>
            <h4>Agregar Todo</h4>
                    <hr/>
                    
                    <form onSubmit={functEnvioTodoList}>

                        <input
                            type="text"
                            name="descripcion"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            value={ descripcion }
                            onChange={changeValueInput}
                        />

                        <button 
                                className="btn btn-outline-primary mt-1 btn-block"
                                type="submit"        
                        >
                            Agregar
                        </button>
                        
                    </form>

        </>
    )
}
