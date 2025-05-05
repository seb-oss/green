/* eslint no-console: "off" */
const fs = require('fs')

// Read the input JSON from update.json
fs.readFile('update.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading update.json:', err)
    return
  }

  const inputJson = JSON.parse(data)

  // Initialize the output structure
  const outputJson = {
    color: {
      level: {},
    },
  }

  // Process the input JSON
  for (const [key, value] of Object.entries(inputJson)) {
    const parts = key.split('-')
    const level = parts[1]
    const group = parts[2]
    const tokenName = parts.slice(3).join('-') // Join the remaining parts to form the token name

    if (!outputJson['color']['level'][level]) {
      outputJson['color']['level'][level] = {}
    }

    if (!outputJson['color']['level'][level][group]) {
      outputJson['color']['level'][level][group] = {}
    }

    const originalValue = {
      value: value['light'],
      darkValue: value['dark'],
      type: 'color',
    }

    outputJson['color']['level'][level][group][tokenName] = originalValue

    // Log the original and updated values using console.table
    console.table([
      { Key: key, Light: value['light'], Dark: value['dark'] },
      {
        Key: key,
        Light: originalValue['value'],
        Dark: originalValue['darkValue'],
      },
    ])
  }

  // Sort the levels alphabetically
  const sortedLevels = Object.keys(outputJson['color']['level']).sort()
  const sortedOutputJson = {
    color: {
      level: {},
    },
  }

  sortedLevels.forEach((level) => {
    sortedOutputJson['color']['level'][level] =
      outputJson['color']['level'][level]
  })

  // Write the grouped JSON to color-2.json
  fs.writeFile(
    'color-2.json',
    JSON.stringify(sortedOutputJson, null, 4),
    'utf8',
    (err) => {
      if (err) {
        console.error('Error writing color-2.json:', err)
        return
      }

      console.log('Processing complete. Output written to color-2.json')
    },
  )
})
