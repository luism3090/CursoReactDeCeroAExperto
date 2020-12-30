import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp ,{Componente1,Componente2} from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';


//const divRoot1 = document.querySelector("#root1");
// const divRoot2 = document.querySelector("#root2");
// const divRoot3 = document.querySelector("#root3");
const divTarea = document.querySelector("#tarea");

//ReactDOM.render(<PrimeraApp saludo="Hola, soy Goku" />,divRoot1);

// ReactDOM.render(<Componente1    saludo2="Eres un insecto" 
//                                 saludo3='Holassssssssss' 
//                 />,divRoot2);

// ReactDOM.render(<Componente2    saludo="Hola que tal" 
//                                 dato1={123} 
//                                 dato2="Obligatorio" 
//                 />,divRoot3);

ReactDOM.render(<CounterApp />,divTarea);