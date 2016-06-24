const React = require('react');
const PokemonStore = require('../../stores/pokemon.js');
const PokemonActions = require('../../actions/pokemon_actions');
const ToysIndex = require("./toys_index");

const PokemonDetail = React.createClass({
  getInitalState: function () {
    return {pokemon: this.getStateFromStore()};
  },
  componentWillUnmount: function () {
    this.listener.remove();
  },
  componentDidMount: function () {
    this.listener = PokemonStore.addListener(this.getStateFromStore);
    PokemonActions.fetchPokemon(this.props.params.pokemonId);
  },
  getStateFromStore: function () {
    this.setState({pokemon: PokemonStore.find(this.props.params.pokemonId)});
  },
  componentWillReceiveProps: function (newProps) {
    PokemonActions.fetchPokemon(newProps.params.pokemonId);
  },
  render: function () {
    let content = "";
    if (this.state) {
      content  = <div className="detail">
                name: {this.state.pokemon.name}<br />
              attack: {this.state.pokemon.attack}<br />
            defense: {this.state.pokemon.defense}<br />
          poke_type: {this.state.pokemon.poke_type}<br />
        moves: {this.state.pokemon.moves.map((move) => {
          return <span key={move}>{move}&nbsp;</span>;
          })}<br />
        <img src={this.state.pokemon.image_url} /><br />

    </div>;
    }
    else {
      content = <div className="detail"></div>;
    }

    let toys = "";
    if (this.state){
      toys = <ToysIndex toys={this.state.pokemon.toys}/>;
    }

    return(
    <div>
      <div className="pokemon-detail-pane">
        {content}
        {toys}
      </div>
      {this.props.children}
    </div>
  );
}
});

module.exports = PokemonDetail;
