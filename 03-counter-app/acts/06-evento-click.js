import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    /* handleAdd */
    const handleAdd = (e) => {
        console.log(e);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
        
            {/* <button onClick={(e) => {handleAdd(e)} }>+1</button> */}
            <button onClick={handleAdd}>+1</button> {/* es lo mismo */}
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;