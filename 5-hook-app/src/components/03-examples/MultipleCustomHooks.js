import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './examples.css';

export const MultipleCustomHooks = () => {

    const {state:counter, incrementar} = useCounter(1);

    const {data, loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const {author, quote} = (data !== null) && data[0];

    // console.log(author);
    // console.log(quote);
    // console.log(quote_id);

    return (


        <div>
            <h1>Breaking Bad</h1>
            <hr/>
        {
            loading 
            ?
                (
                    <div className='alert'> loading... </div>
                )
            :
            (
                <blockquote>
                <p>{quote}</p>
            <footer>{author}</footer>
            </blockquote>
            )
        }
            
        <button className="btn btn-primary" onClick={incrementar}>
            Siguiente quote
        </button>
        

        </div>

    )
}
