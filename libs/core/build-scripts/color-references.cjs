const fs = require('fs').promises
const path = require('path')
const { performance } = require('perf_hooks')

const directoryPath = path.join(__dirname, '../src/components')
const outputFilePath = path.join(__dirname, 'color-references.md')
const searchString = '--gds-sys-color'

const logEntries = []

function log(message) {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] ${message}`)
}

async function processFile(filePath, relativePath) {
  log(`Processing file: ${filePath}`)
  try {
    const fileContent = await fs.readFile(filePath, 'utf8')
    const lines = fileContent.split('\n')
    const matches = []

    lines.forEach((line, index) => {
      if (line.includes(searchString)) {
        matches.push({ line: index + 1, content: line.trim() })
      }
    })

    if (matches.length > 0) {
      const componentName = path.basename(filePath, path.extname(filePath))
      const relativeLink = path.relative(path.dirname(outputFilePath), filePath)

      let output = `# ${componentName}\n`
      matches.forEach((match) => {
        output += `[${relativePath}: Line: ${match.line}](${relativeLink})\n`
        output += `- ${match.content}\n`
        logEntries.push({
          Component: componentName,
          Path: relativePath,
          Line: match.line,
          Content: match.content,
          Link: relativeLink,
        })
      })
      output += '\n'

      await fs.appendFile(outputFilePath, output)
      log(`Matches found and written for file: ${filePath}`)
    } else {
      log(`No matches found in file: ${filePath}`)
    }
  } catch (error) {
    log(`Error processing file ${filePath}: ${error.message}`)
  }
}

async function processDirectory(directory) {
  log(`Processing directory: ${directory}`)
  try {
    const files = await fs.readdir(directory)

    for (const file of files) {
      const filePath = path.join(directory, file)
      const relativePath = path.relative(__dirname, filePath)

      const stats = await fs.stat(filePath)
      if (stats.isDirectory()) {
        await processDirectory(filePath)
      } else {
        await processFile(filePath, relativePath)
      }
    }
  } catch (error) {
    log(`Error processing directory ${directory}: ${error.message}`)
  }
}

async function main() {
  const startTime = performance.now()

  try {
    // Clear the output file before starting
    await fs.writeFile(outputFilePath, '')
    log(`Cleared the output file: ${outputFilePath}`)

    log('Starting directory processing...')
    await processDirectory(directoryPath)
    log('Directory processing completed.')

    console.table(logEntries)
    log(`Total matches found: ${logEntries.length}`)

    // Verify file contents
    const fileStats = await fs.stat(outputFilePath)
    if (fileStats.size > 0) {
      const fileContent = await fs.readFile(outputFilePath, 'utf8')
      if (fileContent.length > 0) {
        log(`Markdown file generated successfully at ${outputFilePath}`)
        log(`File size: ${fileStats.size} bytes`)
      } else {
        throw new Error('File is empty')
      }
    } else {
      throw new Error('File is empty')
    }

    const endTime = performance.now()
    log(`Total time taken: ${(endTime - startTime).toFixed(2)} milliseconds`)
  } catch (error) {
    log(`Error: ${error.message}`)
    process.exit(1)
  }
}

main()
  .then(() => {
    log('Script completed successfully')
    process.exit(0)
  })
  .catch((error) => {
    log(`Unhandled error: ${error.message}`)
    process.exit(1)
  })
