import React, {useState} from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({value}) => {

    /* hook es una función */

    const [counter, setCounter] = useState(value); /* retorna un arreglo */
    



    /* handleAdd */
    const handleAdd = () => {
        setCounter(counter+1);
        // setCounter((c) => c+1); /* se puede recibir tambien una funcion */
    }
    const handleSubtract = () => {
        setCounter(counter-1);
    }
    const handleReset = () => {
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}>+1</button> 
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;