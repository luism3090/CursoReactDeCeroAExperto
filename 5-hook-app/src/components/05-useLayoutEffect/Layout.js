import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

    const { state:counter, incrementar } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const { quote } = ( data !== null ) && data[0];

    const paQuote = useRef();

    const [sizeParrafo, setSizeParrafo] = useState({});

    useLayoutEffect( () => {

        console.log(paQuote.current.getBoundingClientRect());
        setSizeParrafo(paQuote.current.getBoundingClientRect());

    }, [quote] );

    return (


        <div>
            <h1>LayoutEffect</h1>
            <hr/>
        
                <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={ paQuote }
                >
                    { quote } 
                </p>
                </blockquote>

                <pre>
                    {JSON.stringify(sizeParrafo, null , 3)}
                </pre>
            
        <button className="btn btn-primary" onClick={ incrementar }>
            Siguiente quote
        </button>
        

        </div>



    )
}
