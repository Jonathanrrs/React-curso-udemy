import React from 'react';
/* paquete para manejar mejor las rutas de la búsqueda */
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes'
import { UseForm } from '../../hook/UseForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = ({history}) => {

    const location = useLocation();

    /* aqui lo usamos para manejar la búsqueda de la ruta, q por el push de history */
    const {q = ''} = queryString.parse(location.search)
    /* cuando recarguemos la página o entremos directa a esa se mantendrá la búsqueda previamente realizada */
    const initialForm = {
        searchText: q
    };
    /* utilizamos el customhook creado anteriormente */
    const [values, handleInputChange] = UseForm(initialForm);
    
    const {searchText} = values;
    
    const heroesFiltred = heroes;
    
    const handleSearch = (e) => {
        e.preventDefault();
        /* esto es para que en la ruta aparezca el query creado */
        history.push(`?q${searchText}`);
    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                            />
                            <button 
                                type="submit"
                                className="btn m-1 btn-block btn-outline-primary"
                            >
                                Search...
                            </button>
                    </form>

                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        heroesFiltred.map(hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
