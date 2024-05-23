import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// favoritos: [],
			pokemon: [],
			detallespokemon: {},
			// pokemonabilities: [],
			// pokemoncharacteristics: [],
			// pokemonnatures: [],
			// pokemoncolors: [],
			// pokemonhabitats: [],
			// pokemonspecies: [],
			// pokemontypes: [],

		},
		actions: {
			addFavoritos: (item) => {
				const store = getStore();
				if (store.favoritos.includes(item)) {
					alert("Ya has agregado este item a favoritos");
					return
				}
				const updatedFavoritos = [...store.favoritos, item];
				setStore({ favoritos: updatedFavoritos });
			},

			deleteFavoritos: (item) => {
				const store = getStore();
				const updatedFavoritos = store.favoritos.filter((fav) => fav !== item);
				setStore({ favoritos: updatedFavoritos });
			},

			getPokemon: () => {
				fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
					.then((response) => response.json())
					.then((data) => {
						const fetchPromises = data.results.map((item) =>
							fetch(item.url).then((response) => response.json())
						);

						Promise.all(fetchPromises)
							.then((allpokemon) => {
								// setPoke(allpokemon);
								// setTablaPokemon(allpokemon);
								// setLoad(false);
								setStore ({ pokemon: allpokemon });
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
			},

			// getDetalles: (url) => {
			//     fetch(url)
			//         .then(res => res.json())
			//         .then(data => setStore({detallespersonaje: data }))
			// 		// console.log(getStore(detallespersonaje))
			//         .catch(error => console.error(error))
			// },

			// getDetalles: (url) => {
			// 	fetch(url)
			// 		.then(res => res.json())
			// 		.then(data => {
			// 			const detallesAnteriores = getStore().detallespersonaje; // Obtener los detalles anteriores
			// 			const nuevosDetalles = [...detallesAnteriores, data]; // Agregar la nueva data a los detalles anteriores usando el spread operator
			// 			setStore({ detallespersonaje: nuevosDetalles }); // Actualizar el store con los nuevos detalles
			// 		})
			// 		.catch(error => console.error(error))
			// },

			// getPokemonAbilities: () => {
			// 	fetch("https://pokeapi.co/api/v2/ability/")
			// 		.then(res => res.json())
			// 		.then(data => setStore({ pokemonabilities: data.results }))
			// 		.catch(error => console.error(error))
			// },

			// getPokemonCharacteristics: () => {
			// 	fetch("https://pokeapi.co/api/v2/characteristic/")
			// 		.then(res => res.json())
			// 		.then(data => setStore({ pokemoncharacteristics: data.results }))
			// 		.catch(error => console.error(error))
			// },

			// getPokemonNatures: () => {
			// 	fetch("https://pokeapi.co/api/v2/nature/")
			// 		.then(res => res.json())
			// 		.then(data => setStore({ pokemonnatures: data.results }))
			// 		.catch(error => console.error(error))
			// },

			// getPokemonColors: () => {
			// 	fetch("https://pokeapi.co/api/v2/pokemon-color/")
			// 		.then(res => res.json())
			// 		.then(data => setStore({ pokemoncolors: data.results }))
			// 		.catch(error => console.error(error))
			// },

			// getPokemonHabitats: () => {
			// 	fetch("https://pokeapi.co/api/v2/pokemon-habitat/")
			// 		.then(res => res.json())
			// 		.then(data => setStore({ pokemonhabitats: data.results }))
			// 		.catch(error => console.error(error))
			// },

			// getPokemonSpecies: () => {
			// 	fetch("https://pokeapi.co/api/v2/pokemon-species/")
			// 		.then(res => res.json())
			// 		.then(data => setStore({ pokemonspecies: data.results }))
			// 		.catch(error => console.error(error))
			// },

			// getPokemonTypes: () => {
			// 	fetch("https://pokeapi.co/api/v2/type/")
			// 		.then(res => res.json())
			// 		.then(data => setStore({ pokemontypes: data.results }))
			// 		.catch(error => console.error(error))
			// },
		}
	}
}
export default getState;
