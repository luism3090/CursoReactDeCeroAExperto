
import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';
//import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }];


const initialState = JSON.parse(localStorage.getItem('todos')) || [];

export const TodoApp = () => {
    
    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    //console.log(todos);

    // const [ {descripcion}, changeValueInput, reset] = useForm({
    //     descripcion:''
    // });

    //console.log(formStateValues);

    useEffect(() => {
        
        //console.log("entro al useEffect");

        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])
    
    //console.log(todos);

    const functBorrarTodoItem = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }
        
        dispatch(action);
    }

    const functTodoItemDone = (todoId) => {
        
        const action = {

            type:'togle',
            payload:todoId
        }

        dispatch(action);

    }

    const functAddTodo = (newTodo) => {

        const action = {

            type:'add',
            payload:newTodo
        }

        dispatch(action);
    
    }

    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr/>

            <div className="row">

                <div className='col-7'>
                        
                        <TodoList   todos={todos} 
                                    functTodoItemDone={functTodoItemDone}
                                    functBorrarTodoItem={functBorrarTodoItem} 
                        />

                </div>

                <div 
                    className='col-5'>
                    
                    <TodoAdd 
                        functAddTodo={ functAddTodo }
                    />

                </div>

            </div>
            
        

        </div>
    )
}



