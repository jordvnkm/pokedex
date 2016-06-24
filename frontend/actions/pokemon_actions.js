const AppDispatcher = require('../dispatcher/dispatcher');
const PokemonConstants = require('../constants/pokemon_constants');
const ApiUtil = require('../util/api_util');

module.exports = {
  receiveAllPokemons:  function(pokemons){
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },
  fetchAllPokemons: function() {
    ApiUtil.fetchAllPokemons(this.receiveAllPokemons);
  },
  fetchPokemon: function (pokemonId) {
    ApiUtil.fetchPokemon(pokemonId, this.receiveSinglePokemon);
  },
  receiveSinglePokemon: function(pokemon){
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: pokemon
  });}
};
