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
console.log(this.getCommunicator());
return this.getCommunicator().search(address, callback, options);
};

/**
 * @access public
 */
SearchDestination.prototype.reverse = function (lat, lng, callback, options) {
  return this.getCommunicator().reverse(lat, lng, callback, options);
};

/*
SearchDestination.on('begin', function () {});
SearchDestination.on('process', function () {});
SearchDestination.on('chunk', function () {});
SearchDestination.on('end', function () {});
*/

module.exports = new SearchDestination();
