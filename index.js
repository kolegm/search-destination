var util = require('util');

var Searcher = require('./lib');

function SearchDestination() {
  this.provider;
  this.providerOptions;
}

SearchDestination.prototype.useProvider = function (label, options) {
  this.provider = label;
  this.providerOptions = options;
}

/**
 * @access public
 */
SearchDestination.prototype.search = function (address, callback, options) {
  var searcher = new Searcher();
  searcher.useProvider(
    this.provider,
    this.providerOptions
  )
  searcher.search(address, callback, options);
};

/**
 * @access public
 */
SearchDestination.prototype.reverse = function (lat, lng, callback, options) {
  var searcher = new Searcher();
  searcher.useProvider(
    this.provider,
    this.providerOptions
  )
  searcher.reverse(lat, lng, callback, options);
};

module.exports = new SearchDestination();
