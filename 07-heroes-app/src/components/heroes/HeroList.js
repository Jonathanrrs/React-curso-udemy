import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'

export const HeroList = ({publisher}) => {
    /* publisher viene de los selectos donde se manejó la data ficticia */
    const heroes = getHeroesByPublisher(publisher);
   
    return (
        <ul>
            {
                heroes.map(hero => (
                    <li key={hero.id}>
                        {hero.superhero}
                    </li>
                ))
            }
        </ul>
    )
}
