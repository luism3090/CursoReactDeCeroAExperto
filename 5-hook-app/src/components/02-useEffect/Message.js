import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [stateCoords, setStateCoords] = useState({ x:0, y:0 });

    const { x,y } = stateCoords;


    useEffect(() => {
        
        const mouseMove = (e) =>{
            const coors = {x: e.x, y: e.y};

            setStateCoords(coors);

            //console.log(coors);
            //console.log(' :D ');
        }

        // console.log('componente MONTADO');

        window.addEventListener('mousemove',mouseMove);


        return () => {
            //console.log('componente DESMONTADO');
            window.removeEventListener('mousemove',mouseMove);
        }
    }, [] );


    return (
        <div>
            <h3>Coordenadas</h3>
            <p>
                x: {x} y: {y}
            </p>
        </div>
    )
}
