import React from 'react'
import { heroes } from '../../data/heroes'
import { UseForm } from '../../hook/UseForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {

    const initialForm = {
        searchText: ''
    };
    const [values, handleInputChange] = UseForm(initialForm);
    
    const {searchText} = values;

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchText);
    }

    const heroesFiltred = heroes;
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
