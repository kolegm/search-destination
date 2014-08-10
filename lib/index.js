var _ = require('underscore');
var util = require('util');

var SearcherError = require('../error');
var config = require('./config.json');

const PROVIDER_UNKNOWN = 'unknown';

/**
 * Constructor
 */
function Searcher() {
  this._useDefaults();
}

/**
 * @access public
 */
Searcher.prototype.toString = function () {
  return util.format(
    'Searcher [provider = %s] [options = %j]. %s',
    this._getProvider(),
    this._getOptions(),
    __filename
  );
}

/**
 * @access public
 */
Searcher.prototype.useProvider = function (provider, options) {
  this._setProvider(provider);
  this._setOptions(options);
}

/**
 * @access public
 */
Searcher.prototype.search = function (address, callback, options) {
  this._getCommunicator().search(address, callback, options);
}

/**
 * @access public
 */
Searcher.prototype.reverse = function (lat, lng, callback, options) {
  this._getCommunicator().reverse(lat, lng, callback, options);
}

/**
 * @access public
 */
Searcher.prototype._getCommunicator = function () {
  if (!(this._checkCommunicator())) {
    this._initCommunicator();
  }

  this._checkCommunicatorWithError();

  return (this._getAllCommunicators())[this._getProvider()];
}

/**
 * @access protected
 */
Searcher.prototype._useDefaults = function () {
  this.provider = config['default_provider'] || PROVIDER_UNKNOWN;
  this.options = {};
  this.communicators = {};
}

/**
 * @access protected
 */
Searcher.prototype._getAllCommunicators = function () {
  return this.communicators;
}

/**
 * @access protected
 */
Searcher.prototype._initCommunicator = function () {
  var Communicator = require('./loader')(this._getProvider());
  this.communicators[this._getProvider()] = new Communicator(this._getOptions());
}

/**
 * @access protected
 */
Searcher.prototype._checkCommunicator = function () {
  return (this._getProvider() in this._getAllCommunicators());
}

/**
 * @access protected
 */
Searcher.prototype._checkCommunicatorWithError = function () {
  if (!(this._checkCommunicator)) {
    throw new SearcherError(util.format(
      'Communication instance is undefined for provider \'%s\'',
      this._getProvider()
    ));
  }
  return true;
}

/**
 * @access protected
 */
Searcher.prototype._setProvider = function (name) {
  this.provider = String.prototype.toLowerCase.apply(name);
}

/**
 * @access protected
 */
Searcher.prototype._getProvider = function () {
  this._checkProviderWithError();
  return this.provider;
}

/**
 * @access protected
 */
Searcher.prototype._checkProvider = function () {
  return ((this.provider) && (this.provider != PROVIDER_UNKNOWN));
}

/**
 * @access protected
 */
Searcher.prototype._checkProviderWithError = function () {
  if (!this._checkProvider()) {
    throw new SearcherError('Provider name is not valid');
  }
  return true;
}

/**
 * @access protected
 */
Searcher.prototype._setOptions = function (options) {
  this.options = _.extend({}, (options || {}));
}

/**
 * @access protected
 */
Searcher.prototype._getOptions = function () {
  return this.options;
}

module.exports = Searcher;
