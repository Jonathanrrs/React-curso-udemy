import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
    /* utilizamos un usememo para que no se renderize cada vez, sino solo cuando se cambia el publisher */
    /* la dependencia es el publisher porque esto va a dispararse siempre que el publisher cambie */
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    /* publisher viene de los selectos donde se manejó la data ficticia */
    // const heroes = getHeroesByPublisher(publisher);
   
    return (
        <div className="card-columns animate__animated animate__fadeIn">
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
