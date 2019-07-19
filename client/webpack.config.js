/* eslint-disable arrow-parens */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = env => {
  let envConfig;
  !env.module
    ? (envConfig = require('./webpack-build-utils/webpack.development'))
    : (envConfig = require(`./webpack-build-utils/webpack.${env.mode}`));

  return webpackMerge({ mode: env.mode }, commonConfig, envConfig);
};
