var _ = require('underscore');
var util = require('util');

var ControllerError = require('../error');
var config = require('./config.json');

const PROVIDER_UNKNOWN = 'unknown';

/**
 * Constructor
 */
function Controller() {
  this._useDefaults();
}

/**
 * @access public
 */
Controller.prototype.toString = function () {
  return util.format(
    'Controller [provider = %s] [options = %j]. %s',
    this._getProvider(),
    this._getOptions(),
    __filename
  );
}

/**
 * @access public
 */
Controller.prototype.useProvider = function (provider, options) {
  this._setProvider(provider);
  this._setOptions(options);
}

/**
 * @access public
 */
Controller.prototype.getCommunicator = function () {
  if (!(this._checkCommunicator())) {
    this._initCommunicator();
  }
  
  this._checkCommunicatorWithError();

  return (this._getAllCommunicators())[this._getProvider()];
}

/**
 * @access protected
 */
Controller.prototype._useDefaults = function () {
  this.provider = config['default_provider'] || PROVIDER_UNKNOWN;
  this.options = {};
  this.communicators = {};
}

/**
 * @access protected
 */
Controller.prototype._getAllCommunicators = function () {
  return this.communicators;
}

/**
 * @access protected
 */
Controller.prototype._initCommunicator = function () {
  var Communicator = require('./loader')(this._getProvider());
  this.communicators[this._getProvider()] = new Communicator();
}

/**
 * @access protected
 */
Controller.prototype._checkCommunicator = function () {
  return (this._getProvider() in this._getAllCommunicators());
}

/**
 * @access protected
 */
Controller.prototype._checkCommunicatorWithError = function () {
  if (!(this._checkCommunicator)) {
    throw new ControllerError(util.format(
      'Communication instance is undefined for provider \'%s\'',
      this._getProvider()
    ));
  }
  return true;
}

/**
 * @access protected
 */
Controller.prototype._setProvider = function (name) {
  this.provider = String.prototype.toLowerCase.apply(name);
}

/**
 * @access protected
 */
Controller.prototype._getProvider = function () {
  this._checkProviderWithError(); 
  return this.provider;
}

/**
 * @access protected
 */
Controller.prototype._checkProvider = function () {
  return ((this.provider) && (this.provider != PROVIDER_UNKNOWN));
}

/**
 * @access protected
 */
Controller.prototype._checkProviderWithError = function () {
  if (!this._checkProvider()) {
    throw new ControllerError('Provider name is not valid');
  }
  return true; 
}

/**
 * @access protected
 */
Controller.prototype._setOptions = function (options) {
  this.options = _.extend({}, (options || {}));
}

/**
 * @access protected
 */
Controller.prototype._getOptions = function () {
  return this.options;
}

module.exports = Controller;
