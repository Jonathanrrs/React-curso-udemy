import React from 'react'
import { Link } from 'react-router-dom'
import { UseForm } from '../../hooks/useForm'

export const RegisterScreen = () => {


    const inicial = {
        name: 'Jonathan',
        email: 'joni@gmail.com',
        password: '123456',
        password2: '123456'
    }

    const [values, handleInputChange] = UseForm(inicial);

    const {name, email, password, password2} = values;

    const handleRegister = (e) => {
        e.preventDefault();
        
    }

    const isFormValid = () => {
        
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>
            <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={name}
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={password}
                />
                  <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={password2}
                />

                <button
                    className="btn btn-primary btn-block mb-5" 
                    type="submit"
                    // disabled={true}
                >
                    Login
                </button>
             
                <Link to="/auth/login" className="link">
                    Already registered?
                </Link>
            </form>
        </>
    )
}
