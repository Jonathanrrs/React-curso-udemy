import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {
    
    /* hook de react router, este extrae los parametros que vayan por el url */
    const {heroeId} = useParams();
    const hero = getHeroById(heroeId);

    /* si el hereo no existe se redireccionará al home(marvel), no puede ser return porque un componente debe regresar algo, en ese caso un componente de react router  */
    if(!hero) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        /* esta validación es para que con el goback() nos regresa en caso de un ruta especifica nos saca de la app, pero con la validacion 
           utilizamos el push para prevenir esto
        */
        // if(history.length <=2) {
        //     history.push('/');
        // } else{
        //     /* para regresar a una página */
        //     history.goBack();
        // }

        /* es lo mismo pero más cool */
        history.length <= 2 ? history.push('/') : history.goBack();
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={`..//assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail"
                >
                </img>
                
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: {alter_ego}</b></li>
                    <li className="list-group-item"><b>Publisher: {publisher}</b></li>
                    <li className="list-group-item"><b>First appearance: {first_appearance}</b></li>
                </ul>
                <h5>characters</h5>
                <p>{characters}</p>
                <button className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
