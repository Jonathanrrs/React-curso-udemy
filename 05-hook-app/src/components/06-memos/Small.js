import React, {memo} from 'react';

/* memo: es una función que va a revisar la forma memorizada del componente y se va a dispirar si las props cambian   */

export const Small = memo(({value}) => {

    console.log('Me volví a llamar :(');

    return (
        <small>
           {value} 
        </small>
    )
})
