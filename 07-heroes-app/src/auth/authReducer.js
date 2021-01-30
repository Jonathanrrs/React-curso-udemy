import { types } from "../types/types";

export const authReducer = (state= {}, action) => {
    
    switch (action.type) {
        case types.login:
            return {
                /* retornar todo lo que venga en el action.payload */
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
        default:
            return state;
    }
}