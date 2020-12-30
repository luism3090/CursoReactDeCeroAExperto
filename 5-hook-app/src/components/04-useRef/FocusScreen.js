import React, { useRef } from 'react'
import  './useRef.css'

export const FocusScreen = () => {

    const inputRef = useRef();

    const focusClick = () => {

        //document.querySelector('input').focus();
        //document.querySelector('input').select();
        
        inputRef.current.select();

        console.log(inputRef);

    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            
            <div>
                <input
                    ref={ inputRef }
                    type="text"
                    name="nombre"
                    placeholder="Su nombre"
                    className="form-control"
                />
            </div>

            <div>
                <button 
                className="btn btn-primary mt-5"
                onClick={ focusClick }
                >
                    Focus
                </button>
            </div>



        </div>
    )
}
