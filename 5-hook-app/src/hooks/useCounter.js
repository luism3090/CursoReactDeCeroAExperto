import { useState } from "react"

export const useCounter = (initialState = 10) => {


    const [state, setState] = useState(initialState);

    const incrementar = () =>{
        setState(state + 1);
    }

    const decrementar = () =>{
        setState(state - 1);
    }

    const incrementarWithFactor = (factor) =>{
        setState(state + factor);
    }

    const decrementarWithFactor = (factor) =>{
        setState(state - factor);
    }

    const reset = () =>{
        setState(initialState);
    }


    return {
        state,
        incrementar,
        decrementar,
        incrementarWithFactor,
        decrementarWithFactor,
        reset
    }

}
