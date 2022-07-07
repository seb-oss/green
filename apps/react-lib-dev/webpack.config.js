// Helper for combining webpack config objects
const { merge } = require('webpack-merge');

module.exports = (config, context) => {

  console.log(config.plugins);

  return merge(config, {
    // overwrite values here
  });
};
