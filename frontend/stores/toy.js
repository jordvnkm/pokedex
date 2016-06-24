const Store = require('flux/utils').Store;
// const PokemonConstants = require('../constants/pokemon_constants');
const ToyConstants = require("../constants/toy_constants");
const AppDispatcher = require("../dispatcher/dispatcher");

let _toys = {};

const ToyStore = new Store(AppDispatcher);

ToyStore.__onDispatch = function(payload){
  switch (payload.actionType){
  case ToyConstants.TOYS_RECEIVED:
    ToyStore.resetToys(payload.toys);
    ToyStore.__emitChange();
    break;
  }
};

ToyStore.resetToys = function(toys){
  _toys = {};
  toys.forEach((toy) => {
    _toys[toy.id] = toy;
  });
};

ToyStore.all = function(){
  let allToys = [];
  Object.keys(_toys).forEach((id) => {
    allToys.push(_toys[id]);
  });
  return allToys;
};
