import React from 'react';
import PropTypes from 'prop-types';


const PrimeraApp = ({saludo, subtitulo}) => {
  
    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>
    ); 
}

PrimeraApp.propTypes = {
    /* puede ser lo que se necesita */
    saludo: PropTypes.string.isRequired
}

/* valores por defecto para las propiedades */
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;