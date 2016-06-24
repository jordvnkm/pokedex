const React = require("react");
const PokemonStore = require('../../stores/pokemon');
const PokemonActions = require('../../actions/pokemon_actions');

const ToyDetail = React.createClass({
  getInitialState: function(){
    return {toy: null};
  },

  componentDidMount: function(){
    this.listener = PokemonStore.addListener(this._onChange);
    PokemonActions.fetchPokemon(this.props.params.pokemonId);
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },


  componentWillReceiveProps: function (newProps) {
    PokemonActions.fetchPokemon(this.props.params.pokemonId);
  },

  getStateFromStore: function(){
    let pokemon = PokemonStore.find(this.props.params.pokemonId);

    let mytoy = null;
    pokemon.toys.forEach((toy) => {
      console.log(toy.id);
      console.log(this.props.params.toyId);
      console.log(toy.id === this.props.params.toyId);
      if (toy.id === parseInt(this.props.params.toyId)){
        mytoy = toy;
      }
    });
    this.setState({toy: mytoy});
  },


  _onChange: function(){
    this.getStateFromStore();
  },

  render: function(){
    let name = "";
    if (this.state.toy !== null){
      name = <img className="toy-image" src={this.state.toy.image_url} />;
    }
    return (
      <div className="toy-detail-pane">
        <div className="detail">
          <span>{name}</span>
        </div>
      </div>
    );
  }

});

module.exports = ToyDetail;
