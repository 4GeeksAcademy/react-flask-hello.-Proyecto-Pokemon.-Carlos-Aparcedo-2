import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => { // cada vez que quiera ejecutar una funcion ni bien se cargue el componente debo hacer un useEffect, React dice esto va asi! siempre antes del return
		actions.getPokemonTypes()

		// actions.setFavorites() esto hace que se sume uno(1) al contador sin haber seleccionado alguna 
	}, [])
	return (
		<div>
		<div className='px-5 pt-3'>
                <h1>Vehicles</h1>
            </div>
            <div className="d-flex gap-0 column-gap-3 overflow-auto">
                {store.pokemontypes.map((item) => (
                    <div className="col p-5" key={item.uid}>
                        <div className="card p-2 g-col-6" style={{ width: "250px" }}>
                            <img src={`https://pokeapi.co/api/v2/pokemontypes/${item.uid}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body p-7">
                                <h5 className="card-title text-center">{item.name}</h5>
                                <Link className='btn btn-outline-info mx-2' to={`/pokemontypes/${item.uid}`}>Learn more!</Link>
                                <button className='btn btn-outline-warning'
                                    onClick={() => {
                                        let name = item.name
                                        actions.setFavoritos(name)
                                    }}
                                ><i className="fa fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
			</div>
	);
};
