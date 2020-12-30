import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    // 1 Obtener la referencia al userContex

    // 2. setUserState del contex

    const { setUserState } =  useContext( UserContext );


    return (
        <div>
            <h1>Login  Screen</h1>
            <hr/>
            <button
                    className="btn btn-primary"
                    onClick={ () => {
                        setUserState({
                            id: 654,
                            name:'Luis Molina'
                        })
                    }}
            >
                Agregar context
            </button>
        </div>
    )
}
