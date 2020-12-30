import React, { useMemo } from 'react';
import queryString  from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ( { history } ) => {

    const location = useLocation();

    //console.log(location.search);
    const { q = '' } = queryString.parse(location.search);

    
    const [formStateValues, changeValueInput] = useForm({
        searchText: q
    });

    const { searchText } = formStateValues;

    const heroesFiltered = useMemo(() =>  getHeroesByName(q) , [q])
    //const heroesFiltered = getHeroesByName(searchText);

    const funcSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <div>
            <h1>Search </h1>
            <hr/>

            <div className="row">
                
                <div className="col-4">
                    <h4>Search Form</h4>
                    <hr />
                    
                    <form>
                        <input
                            type="text"
                            placeholder="Find yout hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={changeValueInput}
                        
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                            onClick={funcSubmit}
                        >
                            Search.
                        </button>
                        
                    </form>

                </div>

                <div className="col-7">
                    <h4> Results </h4>
                    <hr></hr>

                    { (q === '' ) 
                        && 
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                    }

                    { (q !== '' && heroesFiltered.length === 0) 
                        && 
                            <div className="alert alert-danger">
                                no hero found
                            </div>
                    }

                    {
                        heroesFiltered.map(hero => {
                            return <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        })
                    }

                </div>

            </div>

        </div>
    )
}
