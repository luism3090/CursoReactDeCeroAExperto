import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import './memos.css'
import { Small } from './Small';

export const Memorize = () => {

    const {state:counter , incrementar}  = useCounter(1);

    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            <hr/>

        <h2>Counter: <Small value={counter} /> </h2>

        <button
            className="btn btn-primary mt-4"
            onClick={incrementar}
        >
            1+
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
            className="btn btn-primary mt-4"
            onClick={()=>{
                setShow(!show);
            }}
        >
            Show/Hide: {JSON.stringify(show)}
        </button>

        </div>
    )
}
