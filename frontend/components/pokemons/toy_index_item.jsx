const React = require("react");
const hashHistory = require('react-router').hashHistory;


const ToyIndexItem = React.createClass({
  handleClick: function(){
    hashHistory.push(`/pokemon/${this.props.toy.pokemon_id}/toys/${this.props.toy.id}`);
  },

  render: function(){
    return (
      <li className="toy-list-item" onClick={this.handleClick}>
        Name: {this.props.toy.name} <br />
      Happiness: {this.props.toy.happiness}<br />
    Price: {this.props.toy.price}<br />
      </li>
    );
  }
});

module.exports = ToyIndexItem;
