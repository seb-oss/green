module.exports = (config, context) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack', 'url-loader'],
  })

  return config
}
