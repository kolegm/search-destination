var util = require('util');
var async = require('async');

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

function SearchDesctinationAsync() {
  this.taskHolder = {};
}

util.inherits(SearchDesctinationAsync, SearchDestination);

SearchDesctinationAsync.prototype.addTask = function (key, task) {
  this.taskHolder['key'] = task;
};
SearchDesctinationAsync.prototype.removeTask = function (key) {
  delete this.taskHolder['key'];
};

SearchDesctinationAsync.prototype.run = function () {};

module.exports = new SearchDestination();
