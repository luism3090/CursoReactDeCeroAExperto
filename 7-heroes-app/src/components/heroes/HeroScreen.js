import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ( { history } ) => {

    const { heroeId }  = useParams();

    // const hero = getHeroesById(heroeId);

    const hero = useMemo(() => getHeroesById(heroeId), [heroeId] );

    if( !hero ){
        return <Redirect to="/" />
    }

    const {
        alter_ego,
        characters,
        first_appearance,
        //id,
        publisher,
        superhero
    } = hero;

    const functRegresar = () => {

        history.goBack();

    }

    return (
        <div className="row mt-4">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroeId}.jpg`}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    alt={superhero}
                    />
            </div>

            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush" >
                    <li className="list-group-item"> <b>Alter ego: </b> {alter_ego} </li>
                    <li className="list-group-item"> <b>Publisher: </b> {publisher} </li>
                    <li className="list-group-item"> <b>first appearance: </b> {first_appearance} </li>
                </ul>

                <h5> Characters </h5>
                <p> { characters }</p>

                <button 
                    className="btn btn-primary"
                    onClick={functRegresar}
                >
                    Regresar
                </button>

            </div>

        </div>
    )
}
