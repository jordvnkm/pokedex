const AppDispatcher = require('../dispatcher/dispatcher');
const ToyConstants = require('../constants/toy_constants');
const ApiUtil = require('../util/api_util');

module.exports = {
  receiveAllToys:  function(toys){
    AppDispatcher.dispatch({
      actionType: ToyConstants.TOYS_RECEIVED,
      toys: toys
    });
  },
  fetchAllToys: function() {
    ApiUtil.fetchAllToys(this.receiveAllToys);
  },
  fetchToy: function (toyId) {
    ApiUtil.fetchToy(toyId, this.receiveSingleToy);
  },
  receiveSingleToy: function(toy){
    AppDispatcher.dispatch({
      actionType: ToyConstants.TOY_RECEIVED,
      toy: toy
  });}
};
