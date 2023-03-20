import styles from 'rollup-plugin-styles'

module.exports = (config) => {
  const nxConfig = nrwlConfig(config)
  return {
    ...nxConfig,
    plugins: [
      styles({
        mode: [
          'inject',
          (varname, id) => `console.log(${varname},${JSON.stringify(id)})`,
        ],
      }),
    ],
  }
}
