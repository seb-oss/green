module.exports = (config, context) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: ['raw-loader'],
  })

  return config
}
