

module.exports = {
  fetchAllPokemons: function(callback){
    $.ajax({
      url: "/api/pokemon",
      success: function(pokemons){
        callback(pokemons);
      }
    });
  },
  fetchPokemon: function(pokemonid, callback) {
    $.ajax({
      url: `/api/pokemon/${pokemonid}`,
      success: function(pokemonResp) {
        callback(pokemonResp);
      }
    });
  },
};


// click toy -> toy_actions -> api_utils -> rails backend -> toy_action_callback -> dispatcher -> store -> component
