const Store = require('flux/utils').Store;
const PokemonConstants = require('../constants/pokemon_constants');
const AppDispatcher = require("../dispatcher/dispatcher");

let _pokemons = {};

const PokemonStore = new Store(AppDispatcher);

PokemonStore.__onDispatch = function (payload) {
  switch (payload.actionType){
    case PokemonConstants.POKEMONS_RECEIVED:
      PokemonStore.resetPokemons(payload.pokemons);
      PokemonStore.__emitChange();
      break;
    case PokemonConstants.POKEMON_RECEIVED:
      PokemonStore.resetSinglePokemon(payload.pokemon);
      PokemonStore.__emitChange();
      break;
  }
};

PokemonStore.resetSinglePokemon = function (pokemon) {
  _pokemons[pokemon.id] = pokemon;
};

PokemonStore.resetPokemons = function (pokemons){
  _pokemons = {};
  pokemons.forEach( (pokemon) => {
    _pokemons[pokemon.id] = pokemon;
  });
};

PokemonStore.all = function(){
  let allPokemon = [];
  Object.keys(_pokemons).forEach((id) =>
    {allPokemon.push(_pokemons[id]);}
  );
  return allPokemon;
};

PokemonStore.find = function(id) {
  id = parseInt(id);
  return _pokemons[id];
};


module.exports = PokemonStore;
