import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';
import { UseForm } from '../../hooks/UseForm';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init); /* por defecto es un arreglo vacio */

    const [{description}, handleInputChange, reset] = UseForm({
        description: '', /* este viene del formulario de abajo */
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className="list-group-item"
                                >
                                    <p className="text-center complete">{i + 1}. {todo.desc}</p>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(todo.id)}
                                    >
                                        Borrar
                        </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                        <h4>Agregar TODO</h4>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text"
                                name="description"
                                className="form-control"
                                placeholder="Aprender..."
                                autoComplete="off"
                                onChange={handleInputChange}
                                value={description}
                            />
                            <button
                                type="submit"
                                className="btn btn-outline-primary mt-1 btn-block"
                            >
                                Agregar
                            </button>
                        </form>
                </div>
            </div>
        </div>

    )
}
