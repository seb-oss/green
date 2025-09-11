const path = require('node:path')
const { hashElement } = require('folder-hash')
const replace = require('replace-in-file')
const packageJson = require(path.join(__dirname, '../package.json'))

const options = {
  encoding: 'hex',
}

console.log('Setting semanticVersion...')
const results = replace.sync({
  files: 'dist/libs/core/src/**/*.js',
  from: /__GDS_SEM_VER__/g,
  to: packageJson.version,
})
if (process.env.NX_VERBOSE_LOGGING == 'true') {
  console.log('Replacement results:', results)
}

console.log('Generating scope suffix...')
hashElement(path.join(__dirname, '../src'), options)
  .then((hash) => {
    const suffix = hash.hash.substring(0, 6)
    console.log(`Scope suffix: ${suffix}`)
    const results = replace.sync({
      files: 'dist/libs/core/src/**/*.js',
      from: /-gdsvsuffix/g,
      to: `-${suffix}`,
    })
    if (process.env.NX_VERBOSE_LOGGING == 'true') {
      console.log('Replacement results:', results)
    }
  })
  .catch((error) => {
    return console.error('hashing failed:', error)
  })
