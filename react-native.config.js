const path = require('path');
module.exports = {
  dependencies: {
    'react-native-background-downloader': {
      root: path.resolve(
        __dirname,
        'node_modules/react-native-background-downloader'
      )
    },
    'react-native-svg': {
      root: path.resolve(__dirname, 'node_modules/react-native-svg')
    },
    '@react-native-community/netinfo': {
      root: path.resolve(
        __dirname,
        'node_modules/@react-native-community/netinfo'
      )
    },
    'rn-fetch-blob': {
      root: path.resolve(__dirname, 'node_modules/rn-fetch-blob')
    }
  }
};
