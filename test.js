var searcher = require('./index.js');

const ADDRESS = 'Paris';
const LATITUDE = '48.833330';
const LONGITUDE = '2.333330';
const LANGUAGE = 'en';

var options = {
  language: LANGUAGE
}

function callback (error, result) {
  if (error) console.log(error);
  console.log(result);
}

//searcher.useProvider('wiki');

console.log(searcher.toString());

console.log('search process');
console.log('result in language: ' + LANGUAGE);
console.log('by address: ' + ADDRESS);
console.log('by geo coords: ' + LATITUDE + ', ' + LONGITUDE);

searcher.search(
  ADDRESS,
  callback,
  options
);

searcher.reverse(
  LATITUDE,
  LONGITUDE,
  callback,
  options
);

