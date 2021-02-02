import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {
    
    const {dispatch} = useContext(AuthContext);
    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastpath') || '/';


        /* history lo obtenemos de las props que proporciona react router, con el cual con el push podemos navegar a una ruta especifica */
        // history.push('/');
        /* utilizamos replace para que el back del navegador ya no vuelva al login porque ya lo hicimos, esa es la diferencia con push */
        // history.replace('/');
        const action = {
            type: types.login,
            payload: {
                name: 'Jonathan'
            }
        }
        dispatch(action);
        history.replace(lastPath);
    }
    
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
