"use-strict";

const React = require("react");
const ReactDOM = require("react-dom");
// window.FetchPokemons = require("./util/api_util");
window.PokemonActions = require("./actions/pokemon_actions");
window.PokemonStore  = require("./stores/pokemon.js");
const PokemonsIndex = require("./components/pokemons/pokemons_index");
const App = require('./components/pokemons/app');
const PokemonDetail = require('./components/pokemons/pokemon_detail');
const ToysIndex = require("./components/pokemons/toys_index");
const ToyDetail = require("./components/pokemons/toy_detail");

const ReactRouter = require("react-router");

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;


let routes = <Route path="/" component={App}>
  <Route path="pokemon/:pokemonId" component={PokemonDetail}>
    <Route path="toys/:toyId" component={ToyDetail} />
  </Route>
</Route>;


document.addEventListener("DOMContentLoaded", ()=> {
  ReactDOM.render(<Router history={hashHistory}>{routes}</Router>,
    document.getElementById("root"));
});
