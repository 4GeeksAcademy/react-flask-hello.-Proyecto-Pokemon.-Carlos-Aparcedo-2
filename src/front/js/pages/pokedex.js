import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/pokedex.css";
import { Context } from "../store/appContext";

export const Pokedex = () => {

  // const [result, setResult] = useState([]);
  const [poke, setPoke] = useState([]);
  const [load, setLoad] = useState(true);
  const [buscar, setBuscar] = useState([]);
  const [tablaPokemon, setTablaPokemon] = useState([]);
  const [busqueda, setBusqueda] = useState([]);
  const { store, actions } = useContext(Context);
  // const [mensaje,setMensaje]=useState("");


  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    let resultadoBusqueda = tablaPokemon.filter((elemento) =>
      elemento.name.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );
    setBuscar(resultadoBusqueda);
  };

  useEffect(() => {
    actions.getPokemon()
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then((response) => response.json())
      .then((data) => {
        const fetchPromises = data.results.map((item) =>
          fetch(item.url).then((response) => response.json())
        );

        Promise.all(fetchPromises)
          .then((allpokemon) => {
            setPoke(allpokemon);
            setTablaPokemon(allpokemon);
            setLoad(false);
          })
          .catch((error) => {
            console.error('Error fetching Pokémon data:', error);
            setLoad(false);
          });
      })
      .catch((error) => {
        console.error('Error fetching Pokémon list:', error);
        setLoad(false);
      });
  }, []);

  return (

    <div className="App">
      <div className="pokegallery">
        <input className="form-control inputBuscar" value={busqueda} placeholder="What pokemon will you catch Today?" onChange={handleChange} />
        {load ? (
          <p>Loading...</p>
        ) : (
          buscar.length > 0 ? (
            buscar.map((img, i) => (
              <div className="row columna" key={img.id}>
                <div className="card-pkm">
                  <div className="center-that" id={img.id}>
                    <img src={img.sprites.front_default} alt='pokemon' />
                    <div className='card'>
                      <div className="nameNumber">
                        <h5 className="pokemon-id">#{img.id}</h5>
                        <h5 className="pokemon-name">{img.name}</h5>
                      </div>
                      <div className="types">
                        <h6></h6>
                        <div className="type-pokedex">
                          {img.types.map((type, index) => (
                            <div key={index} className="type-box">
                              {type.type.name}
                            </div>
                          ))}
                        </div>
                      </div>
                      <Link to={`/pokedex/${img.id}`} className="btn btn-outline-success rounded-pill m-1 px-2">Who is this Pokémon?</Link>
                      <button className="btn btn-outline-success rounded-pill m-1 px-2"><i class="fa fa-heart"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            store.pokemon?.map((img, i) => (
              <div className="row columna " key={img.id}>
                <div className="card-pkm">
                  <div className="center-that" id={img.id}>
                    <img src={img.sprites.front_default} alt='pokemon' />
                    <div className='card'>
                      <div className="nameNumber">
                        <h5 className="pokemon-id">#{img.id}</h5>
                        <h5 className="pokemon-name">{img.name}</h5>
                      </div>
                      <div className="types">
                        <h6></h6>
                        <div className="type-pokedex">
                          {img.types.map((type, index) => (
                            <div key={index} className="type-box">
                              {type.type.name}
                            </div>
                          ))}
                        </div>
                      </div>
                      <Link to={`/pokedex/${img.id}`} className="btn btn-outline-success rounded-pill m-1 px-2">Who is this Pokémon?</Link>
                      <button className="btn btn-outline-success rounded-pill m-1 px-2"><i class="fa fa-heart"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )
        )}
      </div>
    </div>
  );
};
