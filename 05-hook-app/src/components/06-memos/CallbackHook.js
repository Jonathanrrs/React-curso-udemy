import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter+1);
    // }

    /* regresará una version memorizada de esa funcion para mandarla como argumento, si la dependecia no ha cambiado */
    const increment = useCallback((num) => {
        setCounter(c => c+num); /* se coloca de esta manera para eliminar la dependencia*/
        
    }, [setCounter]); /* counter no porque siempre se volverá a ejecutar esa funcion bc tiene la misma dependencia */


    useEffect(() => {
        /* ??? */
    }, [increment])

    return (
        <div>
            <h1>UseCallback Hook: {counter}</h1>
            <hr />
            
            <ShowIncrement increment={increment}/> {/* se ocupa a fuerza el react memo */}

        </div>
    )
}
