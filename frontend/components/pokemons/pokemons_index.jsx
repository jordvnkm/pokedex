const React = require("react");
const PokemonStore = require("../../stores/pokemon");
const PokemonActions = require("../../actions/pokemon_actions");
const PokemonIndexItem = require("./pokemon_index_item");

const PokemonsIndex = React.createClass({
  getInitalState: function(){
    return {pokemons: PokemonStore.all()};
  },
  componentDidMount: function(){
    this.listener = PokemonStore.addListener(this._onChange);
    PokemonActions.fetchAllPokemons();
  },
  componentWillUnmount: function(){
    this.listener.remove();
  },

  _onChange: function(){
    this.setState({pokemons: PokemonStore.all()});
  },

  render: function(){
    let content = null;
    if (this.state){
      content = this.state.pokemons.map((pokemon) =>{
        return <PokemonIndexItem pokemon={pokemon} key={pokemon.id}/>;
      });
    }
    return (
      <div>
        <ul>
          {content}
        </ul>
      </div>
    );
  }
});

module.exports = PokemonsIndex;
