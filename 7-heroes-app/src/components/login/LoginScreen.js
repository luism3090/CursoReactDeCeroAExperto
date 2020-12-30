import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';


export const LoginScreen = ({ history }) => {

    const { user , dispatch } = useContext(AuthContext);

    //console.log(user);

    const functLogin = () => {

        const lasPath = localStorage.getItem('lastPath') || '/'

        //history.push('/');

        dispatch({
            type:types.login,
            payload:{
                name: 'Luis Molina'
            }
        })

        history.replace(lasPath);

    }

    return (
        <div className="container mt-5">
            <h1> Login Screen</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={ functLogin }
            >
                Login
            </button>
        </div>
    )
}