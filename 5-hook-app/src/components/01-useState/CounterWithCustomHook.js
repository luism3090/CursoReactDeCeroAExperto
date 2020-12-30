import React from 'react';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const factor = 5;

    const { state , 
        incrementar, 
        decrementar, 
        incrementarWithFactor,
        decrementarWithFactor, 
        reset 
    }  = useCounter();

    // console.log(state);
    // console.log(incrementar);
    // console.log(decrementar);

    
    return (
        <>
            <h1>Counter with Hook {state}</h1>
            <button className='btn btn-primary' onClick={incrementar} > +1</button>
            <p></p>
            <button className='btn btn-primary' onClick={decrementar} > -1</button>
            <p></p>
    <button className='btn btn-primary' onClick={()=>{incrementarWithFactor(factor)}} > +{factor}</button>
            <p></p>
    <button className='btn btn-primary' onClick={()=>{decrementarWithFactor(factor)}} > -{factor}</button>
    <p></p>
    <button className='btn btn-primary' onClick={reset} > RESET</button>
        </>
    )
}
