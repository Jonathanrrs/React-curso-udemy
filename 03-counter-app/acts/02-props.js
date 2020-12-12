// import React from 'react';
// import React, { Fragment } from 'react';

/* Funcional components */

const PrimeraApp = ({saludo = 'Hola mundo'}) => { /* se suele usar la desestructuracion */
  
    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>Mi primera aplicación</p>
        </>
    );
    
}

export default PrimeraApp;