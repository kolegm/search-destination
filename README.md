##search-destination
###General
Node.js module for geocoding and reverse geocoding.  
Search geographic destination by name or address, by location or point of interest, by coordinates.

###Installation
>npm install search-destination [-S]

###Used external modules as communicators for searching
* [Module `search-google-geocode`. Used Google geocoding API](https://github.com/kolegm/google-geocoder)
* [Module `search-geonames`. Used Geonames API](https://github.com/kolegm/search-geonames)
* [Module `search-osm-geocode`. Used Open Street Map (OSM) API](https://github.com/kolegm/search-osm-geocode)

### Usage example
```javascript
// initialize searcher instance
var searcher = require('search-destination');

// request parameters
const ADDRESS = 'Paris';
const LATITUDE = '48.833330';
const LONGITUDE = '2.333330';
const LANGUAGE = 'en';

// you can use Google options to manage result format
var options = {
  language: LANGUAGE
}

// use callback to return result from geocoding process
function callback (error, result) {
  if (error) console.log(error); // on error
  else console.log(result); // on success
}

/**
 * used google by default.
 * available: google, geonames, wiki (alias to geonames), osm (open street map)
 */
//searcher.useProvider('wiki');

// show information about searcher instance
console.log(searcher.toString());

// search deatination by address, place. or poi
searcher.search(ADDRESS, callback, options);
// search deatination by geographical coordinates
searcher.reverse(LATITUDE, LONGITUDE, callback, options);
```
