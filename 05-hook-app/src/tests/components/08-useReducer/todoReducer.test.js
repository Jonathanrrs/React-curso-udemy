import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fuxtures/demoTodos";




describe('Pruebas en todoReducer', () => {
    
    test('Debe retornar el estado por defecto ', () => {
       
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
        
    });

    test('Debe agregar un TODO ', () => {

        const newTodo = {
            id: 3,
            desc: 'Aprender Vue',
            done: false  
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    });
    
    
})
