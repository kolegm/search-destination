var util = require('util');
var Searcher = require('search-geonames');
var BaseLayer = require('./base');

function Layer(options) {
  BaseLayer.call(this, options);
}

util.inherits(Layer, BaseLayer);

/**
 * @access public
 */
Layer.prototype.search = function (address, callback, options) {
  Searcher.searchByQuery(
    address,
    callback,
    this._mergeOptions(options)
  );
}

/**
 * @access public
 */
Layer.prototype.reverse = function (lat, lng, callback, options) {
  Searcher.findNearBy(
    lat,
    lng,
    callback,
    this._mergeOptions(options)
  );
}

module.exports = Layer;
