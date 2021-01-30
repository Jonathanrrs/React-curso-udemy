import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
    /* publisher viene de los selectos donde se manejó la data ficticia */
    const heroes = getHeroesByPublisher(publisher);
   
    return (
        <div className="card-columns">
            {
                heroes.map(hero => (
                    <HeroCard 
                        key={hero.id}
                        /* usamos el operador spread para extraer las propiedades del heroe y esas van a hacer las nuevas propiedades que pasamos a herocard */
                        {...hero}
                    >
                    </HeroCard>
                ))
            }
        </div>
    )
}
