const initialState = [{
    id:1,
    todo: 'Comparar leche',
    done: false
}];



const todoReducer = (state = initialState, action) => {

    if(action?.type === 'agregar') {
        return [...state, action.payload]
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comparar pan',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    // newTodo: newTodo
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);