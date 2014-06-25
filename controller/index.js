var util = require('util');

var Controller = require('./controller');

/**
 * Child constructor
 */
function SearchDestination() {
  // call parent constructor
  Controller.call(this);
}

util.inherits(SearchDestination, Controller);

/**
 * @access public
 */
SearchDestination.prototype.search = function (address, callback, options) {
  return this.getCommunicator().search(address, callback, options);
};

/**
 * @access public
 */
SearchDestination.prototype.reverse = function (lat, lng, callback, options) {
  return this.getCommunicator().reverse(lat, lng, callback, options);
};

module.exports = new SearchDestination();
