const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = env => {
  let envConfig;
  !env.module
    ? (envConfig = require('./webpack.development'))
    : (envConfig = require(`./webpack.${env.mode}`));

  return webpackMerge({ mode: env.mode }, commonConfig, envConfig);
};
