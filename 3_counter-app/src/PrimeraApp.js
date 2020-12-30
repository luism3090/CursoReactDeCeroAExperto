import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/* se debe colocar un div si querermos que el componente regrese varios elementos
mandamos la propiedad props y abajo colocamos props.variable  para imprirmi
NOTA : --> props ya no se se usa
*/

const PrimeraApp = (props) =>{

    const persona = {
        nombre:"Luis",
        edad:30
    }

    const hola = 'Hola mundo';

    //console.log(props);
    
    return (
        <div>
            <h2>{hola}</h2>
            <h3>{persona.nombre}</h3>
            <h3>{props.saludo}</h3>
            {/*<pre>{JSON.stringify(saludo,null,3)}</pre>*/}
            <p>Mi primera aplicación con React</p>
        </div>
    );

}


// si NO queremos colocar un div podemo colocar un Fragment y debemos importarlo
// esto hará que no aparesca ningun div en el html

const Componente1 = ({saludo2,saludo3,dato ="Hola mundo"}) => {
    
    return (
        <Fragment>
            <div>--------------------------------------------------</div>
            <h4>{saludo2}</h4>
            <h4>{saludo3}</h4>
            <h4>{dato}</h4>
            <p>Mi primera aplicación</p>
        </Fragment>
    );

}


// si NO queremos colocar un div podemo colocar un <> y </>
// esto hará que no aparesca ningun div en el html

const Componente2 = ({saludo,dato1,dato2,subtitulo}) => {
    
    return (
        <>
        <div>--------------------------------------------------</div>
            <h2>{saludo}</h2>
            <h2>{dato1}</h2>
            <h2>{dato2}</h2>
            <h3>{subtitulo}</h3>
            <p>Mi primera aplicación</p>
        </>
    );

}

Componente2.propTypes={
    saludo:PropTypes.string,
    dato1:PropTypes.number,
    dato2:PropTypes.string.isRequired
}

Componente2.defaultProps={
    subtitulo: 'Soy un subtitulo'
}


export{
    PrimeraApp as default,
    Componente1,
    Componente2
}
