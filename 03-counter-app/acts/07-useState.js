import React, {useState} from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({value}) => {

    /* hook es una función */

    const [counter, setCounter] = useState(0); /* retorna un arreglo */
    



    /* handleAdd */
    const handleAdd = () => {
        setCounter(counter+1);
        // setCounter((c) => c+1); /* se puede recibir tambien una funcion */
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
        
            {/* <button onClick={(e) => {handleAdd(e)} }>+1</button> */}
            <button onClick={handleAdd}>+1</button> {/* es lo mismo */}
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;