let netinfo = require('@react-native-community/netinfo');
let downloader = require('react-native-background-downloader');
let svg = require('react-native-svg');
let fBlob = require('rn-fetch-blob');
module.exports = {
  dependencies: {
    '@react-native-community/netinfo': {
      root: netinfo
    },
    'react-native-background-downloader': {
      root: downloader
    },
    'react-native-svg': {
      root: svg
    },
    'rn-fetch-blob': {
      root: fBlob
    }
  }
};
