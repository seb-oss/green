const path = require('node:path')
const { hashElement } = require('folder-hash')
const replace = require('replace-in-file')

const options = {
  encoding: 'hex',
}

console.log('Generating scope suffix...')
hashElement(path.join(__dirname, '../src'), options)
  .then((hash) => {
    const suffix = hash.hash.substring(0, 6)
    console.log(`Scope suffix: ${suffix}`)
    const results = replace.sync({
      files: 'dist/libs/core/src/*.js',
      from: /-gdsvsuffix/g,
      to: `-${suffix}`,
    })
    console.log(results)
  })
  .catch((error) => {
    return console.error('hashing failed:', error)
  })
