import React from 'react';
import { Link } from 'react-router-dom';
import { UseForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/ui';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    /* extraemos los mensajes de error del state */
    const { msgError } = useSelector(state => state.ui);

    const inicial = {
        name: 'Jonathan',
        email: 'joni@gmail.com',
        password: '123456',
        password2: '123456'
    }

    const [values, handleInputChange] = UseForm(inicial);

    const { name, email, password, password2 } = values;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            console.log('form correcto');
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name is required'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false;
        }
        else if (password !== password2 || password.length < 5) {
            dispatch(setError('Password should be at least 6 characters and match each other'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>

                {   msgError && 
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )

                }

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
