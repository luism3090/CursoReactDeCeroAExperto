import { types } from "../types/types";

/*

Cuando este el usuario autenticado el state serà el siguiente:

{
    uid: 'sfhiif38232u3272',
    name: 'Luis Molina'
}

*/

export const authReducer = ( state = {} , action) => {

    switch (action.type) {

        case types.login:

            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        
        case types.logout:

        return  { }
    
        default:
            return state;
    }


}