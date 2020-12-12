// import React from 'react';
// import React, { Fragment } from 'react';

/* Funcional components */

const PrimeraApp = (props) => {
    console.log(props);
    const saludo = 'Hola mundo';

    return (
        <> {/* fragment */}
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>Mi primera aplicación</p>
        </>
    );
    
}

export default PrimeraApp;