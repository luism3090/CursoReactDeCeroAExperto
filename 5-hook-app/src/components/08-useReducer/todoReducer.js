
export const todoReducer = ( state = [], action ) => {

    //console.log("entro al TodoReducer");

    switch (action.type) {

        case 'add':
            return [ ...state, action.payload ];


        case 'delete':

            return state.filter( (todo) => {

                    return todo.id !== action.payload
                
                }

            );
        
        case 'togle':
            
                // otra forma de hacer el togle
            return (
                state.map( todo =>  
                        ( todo.id === action.payload )
                        ? { ...todo, done: !todo.done}
                        : todo       
                        
                )
            );


        case 'togle-old':
            
            // primera forma de hacer el togle
            return state.map( (todo) => {
                    
                    if( todo.id === action.payload){

                        const array = {
                            ...todo,
                            done: !todo.done
                        }

                        return array;

                    }
                    else{
                        return todo;
                    }
                });

    
        default:
            return state;
    }

}