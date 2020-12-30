import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ( {todos, functTodoItemDone, functBorrarTodoItem} ) => {

    //console.log(todos);
    //console.log(todoItemDone);
    //console.log(borrarTodoItem);

    return (
        <ul>
            {
                todos.map( ( todo, i ) => {
                    return <TodoListItem  key={todo.id} todo={todo} index={i} functTodoItemDone={functTodoItemDone} functBorrarTodoItem={functBorrarTodoItem} />
                })
            }
        </ul>
    )
}
