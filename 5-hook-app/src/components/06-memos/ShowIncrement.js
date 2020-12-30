import React from 'react'

export const ShowIncrement = React.memo(({incrementar}) => {

    console.log('Hola me volví a llamar');

    return (
        
            <button className='btn btn-primary'
                    onClick={ () => { incrementar( 5 ) } }        
            >
                incrementar +1
            </button>
        
    )
});
