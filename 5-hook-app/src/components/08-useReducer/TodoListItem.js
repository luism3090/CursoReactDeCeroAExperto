import React from 'react'

export const TodoListItem = ( { todo, index, functTodoItemDone, functBorrarTodoItem }  ) => {    

    return (
                <li 
                    key={todo.id} 
                    className="list-group-item"
                >
                    <p 
                        className={ todo.done ? "complete" : "" }
                        onClick={ () => functTodoItemDone(todo.id) }
                    > 
                        { 1 + index }. {todo.desc} 

                    </p>

                    <button className="btn btn-danger"
                                            onClick={ () => functBorrarTodoItem(todo.id)  }
                                    >
                                Borrar
                    </button>
            
                </li>

    )
}
