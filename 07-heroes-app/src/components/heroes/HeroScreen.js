import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
    
    /* hook de react router, este extrae los parametros que vayan por el url */
    const {heroeId} = useParams();
    const hero = getHeroById(heroeId);

    /* si el hereo no existe se redireccionará al home(marvel), no puede ser return porque un componente debe regresar algo, en ese caso un componente de react router  */
    if(!hero) {
        return <Redirect to="/" />
    }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;
    return (
        <div>
            <h1>Hero Screen</h1>
        </div>
    )
}
