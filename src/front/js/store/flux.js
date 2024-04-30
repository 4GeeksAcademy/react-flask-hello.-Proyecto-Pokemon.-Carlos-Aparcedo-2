import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritos: [],
			// pokemonabilities: [],
			// pokemoncharacteristics: [],
			// pokemonnatures: [],
			// pokemon: [],
			// pokemoncolors: [],
			// pokemonhabitats: [],
			// pokemonspecies: [],
			pokemontypes: [],

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

			// getPokemon: () => {
			// 	fetch("https://pokeapi.co/api/v2/pokemon/")
			// 		.then(res => res.json())
			// 		.then(data => setStore({ pokemon: data.results }))
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

			getPokemonTypes: () => {
				fetch("https://pokeapi.co/api/v2/type/")
					.then(res => res.json())
					.then(data => setStore({ pokemontypes: data.results }))
					.catch(error => console.error(error))
			},
		}
	}
}
export default getState;
