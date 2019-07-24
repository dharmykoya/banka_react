module.exports = {
  moduleNameMapper: {
    '\\.modules\\.css': 'identity-obj-proxy',
    '\\.css$': require.resolve('./src/testUtil/style-mock.js'),
    '\\.(css|jpg|png|svg)$': '<rootDir>/image-mock.js'
  },

  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.js?$': 'babel-jest'
  },
  collectCoverage: true
};
