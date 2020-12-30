import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) => {

    const [counter,setCounter] = useState(value); // retorna un arreglo con 2 valores

     //console.log(counter);
    //console.log(setCounter);

    /*   ----------- Notas ----------------

        esta es la mejor forma de modficar el estado con setState
        usualmente se va a trabajar con esta forma 
        
        setCounter(counter + 1);  

        esta es otra forma de modificar el estado setState        
        pero habrá ocaciones en que se trabajara de esta otra forma 

        //setCounter((c) => c + 1);
    
    */

    const aumentarValue = (e) => {        
        setCounter(counter + 1);  
    }

    const restarValue = (e) => {
        setCounter(counter - 1);
    }

    const resetValue = (e) => {
        setCounter(value);
    }

    return (
        <div>
            <h3>----------------- Counter App ---------------</h3>
            <h2>{counter}</h2>
            <button onClick={aumentarValue} >1+</button>
            <button onClick={resetValue} >Reset</button>
            <button onClick={restarValue} >1-</button>
            {/*<button onClick={(e)=>{aumentarValue(e)}} >1+</button>*/}
            
        </div>
    )
}

CounterApp.propTypes = {
    value:PropTypes.number
}

export default CounterApp;
