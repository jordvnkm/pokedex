const React = require("react");
const HashHistory = require('react-router').hashHistory;

const PokemonIndexItem = React.createClass({
  showDetail: function(){
    HashHistory.push(`/pokemon/${this.props.pokemon.id}`);
  },
  render: function() {
    return (
      <li className="poke-list-item" onClick={this.showDetail}>
        Name: {this.props.pokemon.name}
        type: {this.props.pokemon.poke_type}
      </li>
    );
  }
});

module.exports = PokemonIndexItem;
