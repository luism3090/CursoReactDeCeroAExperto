import React, { useCallback, useEffect, useState } from 'react'
import './memos.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHooks = () => {

    const [counter, setCounter] = useState(10);

    // const incrementar = () => {
    //     setCounter(counter + 1);
    // }

    const incrementar = useCallback( (num) => {
        setCounter( (c) => c + num )
    }, [ setCounter ]);


    useEffect(()=>{
        // ????
    }, [incrementar] )

    return (
        <div>
            <h1>useCallback Hooks {counter}</h1>
            <hr></hr>

            <ShowIncrement incrementar={incrementar} />
        </div>
    )
}
