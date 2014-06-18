var util = require('util');

var layers = require('./layers.json'); 
var LoaderError = require('../error');

function loader(providerName)
{
  var layer;
  providerName = (providerName).toString();
  layer = layers[providerName];
  
  try {
    if (!layer) {
      throw new Error(util.format(
        'Communciation layer %sis undefined.',
        (providerName) ? util.format('for provider %s ', providerName) : ''
      ));
    }

    communicator = require('./layers/' + layer);
 
    if (!communicator) {
      throw new Error(util.format(
        'Communicator %sis undefined.',
        (providerName) ? util.format('in module %s ', moduleName) : ''
      ));
    }
  } catch (error) {
    throw new LoaderError(error.message); 
  }
  return communicator;
}

module.exports = loader;
