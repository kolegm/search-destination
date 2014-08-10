var util = require('util');
var searcher = require('./');

const ADDRESS = 'Paris';
const LATITUDE = '48.833330';
const LONGITUDE = '2.333330';
const LANGUAGE = 'en';

var options = {
  language: LANGUAGE
}

function callback (error, result) {
  if (error) console.log(error);
  else console.log(result);
}

//searcher.useProvider('wiki', { username: "demo" } );
searcher.useProvider('osm');

searcher.search(ADDRESS, callback, options);
searcher.reverse(LATITUDE, LONGITUDE, callback, options);
