import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';


export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    /* !!: transformar ese null en un falso */
    const { quote } = !!data && data[0]; /* si data es verdadero entonces se extrae data en la posición 0 */

    const pTag = useRef()

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    },[quote])


    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p 
                
                    className="mb-1"
                    ref={pTag}
                >
                    {quote}
                    
                </p>
            </blockquote>
            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                Siguiente quote
                </button>

        </div>
    )
}
