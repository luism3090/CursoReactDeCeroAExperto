import React, { useState } from 'react'

export const useForm = (initialState = {}) => {
    
    //console.log("entro al useForm");

    const [formStateValues, setFormStateValues] = useState(initialState);
    
    const reset = () => {
        setFormStateValues(initialState);
    }

    const changeValueInput = ({target}) => {
        
        setFormStateValues({
            ...formStateValues,
            [ target.name ]: target.value
        });
    }

    return [formStateValues, changeValueInput, reset];

}
