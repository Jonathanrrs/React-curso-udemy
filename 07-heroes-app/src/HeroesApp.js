import React, { useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

export const HeroesApp = () => {
    
    const init = () => {
        /* json.parse porque es objeto, si existe se retorna, sino regresa un objeto con false en logged */
        return JSON.parse(localStorage.getItem('user')) || {logged: false};
    }

    /* el reducer será el que creamos, initial state objeto vacio, el init porque vamos a leer el localstorage */
    const [user, dispatch] = useReducer(authReducer, {}, init)
    /* ahora podemos utilizar el user y dispatch en cualquier parte de la app */
    return (
        <div>
            <AuthContext.Provider value={{user, dispatch}}>
            <AppRouter />
            </AuthContext.Provider>
        </div>
    )
}
