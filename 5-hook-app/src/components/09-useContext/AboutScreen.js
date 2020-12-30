import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const { user, setUserState } = useContext(UserContext);



    return (
        <div>
            <h1>About  Screen</h1>
            <hr/>
            
            <pre>
                { JSON.stringify(user, null,3) }
            </pre>

            <button
                className="btn btn-warning"
                onClick={ () => {
                    setUserState({})
                }}
            >
                Limpiar
            </button>

        </div>
    )
}
